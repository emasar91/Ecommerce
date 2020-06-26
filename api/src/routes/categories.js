 const server = require('express').Router();
 const { Category } = require('../models');

 server.post('/agregar', function (req, res){
     Category.create({         
         nombre: req.body.nombre,         
     }).then(()=>{
         res.send('Se ha agregado una nueva categoria');      
     }).catch(()=>{
         res.send('No se agrego una nueva categoria');
     });
 }); 


 module.exports = server;