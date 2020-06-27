 const server = require('express').Router();
 const { Category, Product } = require('../models');

 server.post('/agregar', function(req, res) {
     Category.create({
         nombre: req.body.nombre,
     }).then(() => {
         res.send('Se ha agregado una nueva categoria');
     }).catch(() => {
         res.send('No se agrego una nueva categoria');
     });
 });

 server.put('/modificar/:id', (req, res) => {
     const id = req.params.id;

     Category.update(req.body, {
             where: {
                 idCat: id,
             },
             returning: true,
         }).then(function(category) {
             category.update({
                 nombre: req.body.nombre,
             })
         })
         .then(() => {
             return res.send('Categoria Modificada')
         })

 });


 server.delete('/delete/:id', (req, res) => {
     const id = req.params.id;
     Category.destroy({
             where: { idCat: id },
         })
         .then(() => {
             return res.send("se ha borrado");
         })

 });

 server.put("/adddelete/:productId", function(req, res) {
     var prod = function() {
         return Product.findByPk(req.params.productId);
     };
     var cat = function() {
         return Category.findOne({
             where: {
                 nombre: req.body.nombre
             }
         });
     };

     if (req.body.accion === 'add') {
         Promise.all([prod(), cat()]).then((response) => {
             if (response[0] && response[1]) {
                 response[0].addCategory(response[1]);
                 res.send("Succesfull add");
             } else {
                 res.status(404).send("La categoria o el producto no existe");
             };
         }).catch(() => res.sendStatus(400));




     } else if (req.body.accion === 'remove') {
         Promise.all([prod(), cat()]).then((response) => {
             if (response[0] && response[1]) {
                 response[0].removeCategory(response[1]);
                 res.send("Succesfull remove");
             } else {
                 res.status(404).send("La categoria o el producto no existe");
             };
         }).catch(() => res.sendStatus(400));
     } else { res.status(400).send("La accion debe existir y debe ser add o remove") }
 })
 module.exports = server;