const server = require('express').Router();
const { Product } = require('../models');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

server.get('/', function(req, res) {
    Product.findAll()
        .then(function(products) {
            return res.status(200).send(products);
        });
});

server.get('/search/:search', function(req, res) {
    var name = req.params.search;
    Product.findAll({
        where: {
            titulo: {
                [Op.like]: '%' + name + '%'
            }
        }


    }).then(function(products) {
        console.log(products);
        return res.status(200).send(products)
    })
})

server.get('/:id', function(req, res) {

    Product.findOne({
        where: {
            id: req.params.id,
        }
    }).then(function(products) {
        console.log(products);
        return res.status(200).send(products)
    })
})



server.post('/agregar', function(req, res) {
    Product.create({
            titulo: req.body.titulo,
            precio: req.body.precio,
            cantidad: req.body.cantidad,
            imagen: req.body.imagen,
            descripcion: req.body.descripcion,
        })
        .then(() => {
            return res.send('Se ha agregado un nuevo producto')
        });
});

server.put('/modificar/:id', function(req, res) {

    Product.findOne({
            where: {
                id: req.params.id,
            }
        }).then(function(product) {
            product.update({
                titulo: req.body.titulo,
                precio: req.body.precio,
                cantidad: req.body.cantidad,
                imagen: req.body.imagen,
                descripcion: req.body.descripcion,
            })
        })
        .then(() => {
            return res.send('Producto Modificado')
        })
        .catch(() => {
            return res.send('No se modifico');
        })
});





module.exports = server;
