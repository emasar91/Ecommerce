const server = require('express').Router();
const { Orden, User, Product } = require("../models");
const Sequelize = require('sequelize');


//Ruta que retorna todas las ordenes
server.get('/', function(req, res) {
    Orden.findAll()
        .then(function(products) {
            return res.status(200).send(products);
        });
});

//Ruta modificar orden
server.put('/modificar/:id', function(req, res) {

    if (req.body.estado === "" || req.body.cantidad === "") {
        return res.status(400).send("faltan parametros")
    }

    Orden.findOne({
            where: {
                id: req.params.id,
            }
        }).then(function(product) {
            Orden.update({
                estado: req.body.estado,
                cantidad: req.body.cantidad,
            })
        })
        .then(() => {
            return res.send('Orden Modificada')
        })
        .catch(() => {
            return res.status(400).send('No se modifico');
        })
});

//Ruta que retorna todos los items del carrito.
server.get('/products/:idOrden', function(req, res) {

    Orden.findByPk(req.params.idOrden)

    .then((orden) => {
            orden.getProduct().then((productos) => {
                return res.status(200).send(productos)
            });
        })
        .catch(err => res.status(400).send("Sin productos"));
})

//Ruta para vaciar carrito
server.delete('/:id', (req, res) => {
    const id = req.params.id;
    Orden.destroy({
            where: { idOrden: id },
        })
        .then(deletedOrden => {
            res.json(deletedOrden);
        })
        .catch(res.send);
});

//Ruta que retorne todas las ordenes de usuario
server.get('/ordenes/user', function(req, res) {

    Users.findByPk(req.params.id)

    .then((orden) => {
            orden.getUser({ orden }).then((productos) => {
                if (productos.length === 0)
                    return res.status(200).send(productos)
                return res.send(productos)
            });
        })
        .catch(err => res.status(400).send("Sin productos"));
})

server.post("/:productId/:userId", function(req, res) {

    var producto = function() {
        return Product.findByPk(req.params.productId);
    };

    var carrito = function() {
        return Orden.findOne({
            where: {
                estado: 'abierto',
                userIdUser: req.params.userId
            }
        })
    };

    Promise.all([carrito(), producto()]).then((response) => {
        var cart = response[0]
        var prod = response[1]
        if (cart !== null) {
            cart.addProduct(prod)
            return res.send('Se ha agregado el producto a su orden')
        } else {
            Orden.create({
                estado: 'abierto',
                userIdUser: req.params.userId
            }).then(response => {
                response.addProduct(prod)
                return res.send('Se ha agregado el producto a su orden')
            })
        }

    })
});

server.post('/agregar/:userId', function(req, res) { //crea carrito
    Orden.create({
            estado: "cerrado",
            userIdUser: req.params.userId
        })
        .then(() => {
            return res.send('Se creado un nueva orden')
        })
        .catch(() => {
            return res.status(400).send('No se creo la orden')
        })
});




module.exports = server;