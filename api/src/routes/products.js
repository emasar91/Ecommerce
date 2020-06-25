const server = require('express').Router();
const {Product} = require('../models');


server.get('/', function(req, res) {
    Product.findAll()
        .then(function(products) {

            return res.status(200).send(products);
        });
});

  server.get('/:search', function (req, res) {
      var name = req.params.search;
       Product.findOne({where :{
           titulo: name,
       }}).then(function(products){
        
        return res.status(200).send(products)
       })
    })     





module.exports = server;