const { Product, Category } = require('./src/models/index.js');​
const dataProducts = [{
        titulo: "leche",
        descripcion: "",
        precio: 55,
        cantidad: 2,
        imagen: ""

    },

    {
        titulo: "harina",
        descripcion: "",
        precio: 50,
        cantidad: 1,
        imagen: ""

    },


];​
const dataCategoties = [
    { nombre: "frios" },
    { nombre: "congelados" }

];​
const dataProdsXCats = [{
    titulo: "pan",
    descripcion: "",
    precio: 500,
    cantidad: 2,
    imagen: "",

    category: [
        { nombre: "panificados" },
        { nombre: "comestibles" },
    ]
}];​
function fillDB() {
    dataCategoties.forEach((elem) => { return Category.create(elem) });
    dataProducts.forEach((elem) => { return Product.create(elem) });
    dataProdsXCats.forEach((elem) => {
        return Product.create(elem, { include: "category" })
    });
};​
module.exports = fillDB;