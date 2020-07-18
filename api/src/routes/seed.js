const server = require('express').Router();
const { Category, Orden, Product, Productoxorden, Review, User } = require('../models');
const Sequelize = require('sequelize');

server.get('/', async function(req, res) {
    const dataProducts = [{
            titulo: "leche",
            descripcion: "",
            precio: 55,
            cantidad: 2,
            imagen: "https://d500.epimg.net/cincodias/imagenes/2018/11/13/lifestyle/1542113135_776401_1542116070_noticia_normal.jpg"

        },

        {
            titulo: "harina",
            descripcion: "",
            precio: 50,
            cantidad: 1,
            imagen: ""

        }
    ]
    const dataCategoties = [
        { nombre: "frios" },
        { nombre: "congelados" }

    ]

    for (var i = 0; i < dataProducts.length; i++) {
        await Product.create(dataProducts[i]);
    }
    for (var i = 0; i < dataCategoties.length; i++) {
        await Category.create(dataCategoties[i]);
    }

    res.send("Carga exitosa");
});

module.exports = server;





// ---------------------

// const { Product, Category } = require('./src/models/index.js');​
// ;​
// function fillDB() {
//     dataCategoties.forEach((elem) => { return Category.create(elem) });
//     dataProducts.forEach((elem) => { return Product.create(elem) });
//     dataProdsXCats.forEach((elem) => {
//         return Product.create(elem, { include: "category" })
//     });
// };​
// module.exports = fillDB;