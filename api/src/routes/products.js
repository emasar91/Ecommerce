const server = require('express').Router();
const {Product} = require('../models');


server.get('/', function(req, res) {
    Product.findAll()
        .then(function(product) {
            res.send(product);
        });
});


module.exports = server;