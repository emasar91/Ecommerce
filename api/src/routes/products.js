const server = require('express').Router();
const { Product } = require('../models');


server.get('/', function(req, res) {
    Product.findAll()
        .then(function(products) {

            return res.status(200).send(products);
        });
});

server.get('/:id', function(req, res) {
    var numero = req.params.id;
    Product.findOne({
        where: {
            id: numero,
        }
    }).then(function(products) {
        console.log(products);
        return res.status(200).send(products)
    })
})





module.exports = server;