 const server = require('express').Router();
 const { Category } = require('../models');

 server.post('/agregar', function (req, res){
     Category.create({         
         nombre: req.body.nombre,         
     });
     res.send('Se ha agregado una nueva categoria');
 }); 


 module.exports = server;