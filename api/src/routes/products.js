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
                [Op.iLike]: '%' + name + '%'
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
    });
    res.send('Se ha agregado un nuevo producto');

});

server.put("/:productId", function(req, res) {
    var prod = function() {
        return Product.findByPk(req.params.productId);
    };
    var cat = function() {
        return Category.findOne({
            where: {
                categoryName: req.body.categoryName
            }
        });
    };
    if (req.body.accion === "add") {
        Promise.all([prod(), cat()])
            .then((response) => {
                if (response[0] && response[1]) {
                    response[0].addCategory(response[1]);
                    res.send("Succesfull add");
                } else {
                    res.status(404).send("La categoria o el producto no existe");
                };
            }).catch(() => res.sendStatus(400));
    } else if (req.body.accion === "remove") {
        Promise.all([prod(), cat()])
            .then((response) => {
                if (response[0] && response[1]) {
                    response[0].removeCategory(response[1]);
                    res.send("Succesfull remove");
                } else {
                    res.status(404).send("La categoria o el producto no existe");
                };
            }).catch(() => res.sendStatus(400));
    } else {
        res.status(400).send("La accion debe existir y solo puede ser add o remove");
    };
});

server.delete('/:id', (req, res) => {
    const id = req.params.id;
    Product.destroy({
            where: { id: id },
        })
        .then(deletedProduct => {
            res.json(deletedProduct);
        })
        .catch(res.send);
});



module.exports = server;