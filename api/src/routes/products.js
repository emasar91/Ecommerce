const server = require('express').Router();
const { Product } = require('../models');


server.get('/', function(req, res) {
    Product.findAll()
        .then(function(products) {

            return res.status(200).send(products);
        });
});

server.get('/:id', function(req, res) { //para el detalle 
    var name = req.params.id;
    Product.findOne({
        where: {
            id: name,
        }
    }).then(function(products) {

        return res.status(200).send(products)
    });
});
server.get('/?search', function(req, res) { //para el filtrado
    var name = req.query.search;
    Product.findOne({
        where: {
            titulo: titulo.includes(name),
        }
    }).then(function(products) {

        return res.status(200).send(products)
    });
});






module.exports = server;