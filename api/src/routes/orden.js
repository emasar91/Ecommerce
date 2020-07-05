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
                if (productos.length === 0)
                    return res.status(200).send(productos)
                return res.send(productos)
            });
        })
        .catch(err => res.status(400).send("Sin productos"));
})

//Ruta para vaciar carrito
server.delete('/:id', (req, res) => {
    const id = req.params.id;
    Orden.destroy({
            where: { id: id },
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
    //Agrega producto y usuario a una orden
server.post("/:productId/:userId", function(req, res) {
    var product = function() {
        return Product.findByPk(req.params.productId);
    };

    var orden = function() {
        return Orden.findOrCreate({
            where: {
                estado: "true",
                userIdUser: req.params.userId
            }
        })

    };


    var user = function() {
        return User.findByPk(req.params.userId);
    };

    Promise.all([product(), orden(), user()]).then((response) => {
        if (response[0] && response[1]) {
            response[1].addProduct(response[0]);

            if (response[2]) {
                response[2].addOrden(response[1]);
                return res.send('Se ha agregado el producto a su orden')
            }
        }
    })
});

server.post('/agregar', function(req, res) { //crea carrito
    Orden.create({
            estado: "true",
        })
        .then(() => {
            return res.send('Se creado un nueva orden')
        })
        .catch(() => {
            return res.status(400).send('No se creo la orden')
        })
});

//Modificar cantidades de Carrito



module.exports = server;