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
    //Agrega producto y usuario a una orden
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

//Modificar cantidades de Carrito

// server.put("/modificarOrden/:idOrden", function(req, res) {
//     var orden = function() {
//         return Orden.findByPk(req.params.idOrden);
//     };
//     var cantidad = function() {
//         return Cantidad.findOne({
//             where: {
//                 nombre: req.body.nombre,
//             }
//         });
//     };

//     if (req.body.accion === 'add') {
//         Promise.all([orden(), cantidad()]).then((response) => {
//             if (response[0] && response[1]) {
//                 response[0].addCantidad(response[1]);
//                 return res.send("Cantidad Agregada");
//             } else {
//                 res.status(404).send("La cantidad o orden no existe");
//             };
//         }).catch(() => res.sendStatus(400));




//     } else if (req.body.accion === 'remove') {
//         Promise.all([product(), cantidad()]).then((response) => {
//             if (response[0] && response[1]) {
//                 response[0].removeCantidad(response[1]);
//                 return res.send("Cantidad Eliminada");
//             } else {
//                 res.status(404).send("La cantidad o la orden no existe");
//             };
//         }).catch(() => res.sendStatus(400));
//     } else { res.status(400).send("La accion debe existir y debe ser add o remove") }
// })

router.put("/agregar/producto/cantidad", (req, res) => {
    const { cantidad, precioVenta, productoId, carritoId } = req.body;
    Ordenxproducto.update({
            cantidad,
            precioVenta
        }, {
            where: {
                productId,
                IdOrden
            }
        })
        .then(() => {
            res.sendStatus(200);
        })
        .catch(() => {
            res.sendStatus(404);
        });
});

module.exports = server;