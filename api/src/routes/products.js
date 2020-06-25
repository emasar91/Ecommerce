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
        console.log(products);
        return res.status(200).send(products)
       })
    })     
// server.get('/:search', function (req, res){
//     Product.findOne({
//         where: {titulo : req.params.search
//         }
//     })
//     .then(function(products) {
//         if (products) {
//         var err = new Error("El producto no fue encontrado");
//         err.status = 404;
//         throw err;
//     }
//             res.render('Product', { products })
//         res.sendStatus(404);
//       }); 
// });




module.exports = server;