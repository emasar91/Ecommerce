const fs = require('fs');
const path = require('path');
const db = require('../db.js');
const { Sequelize } = require('sequelize');
//const Product = require ('./Product.js');
//const Category = require ('./Category.js');
//const User = require ('./User.js');
//const Orden = require ('./Orden.js');
const basename = path.basename(__filename);
const models = {};

models.conn = db();

fs.readdirSync(__dirname)
    .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
    .forEach((file) => {
        const model = models.conn.import(path.join(__dirname, file));
        const name = file.split('.')[0];
        models[name] = model;
    });

const {
    Product = require('./Product.js'),
        Category = require('./Category.js'),
        User = require('./User.js'),
        Orden = require('./Orden.js')
} = models

// Add model relationships here
db.Sequelize = Sequelize;


Product.belongsToMany(Category, { as: "category", through: 'productoxcategorias' });
Category.belongsToMany(Product, { as: "product", through: 'productoxcategorias' });

Product.belongsToMany(Category, { as: "orden", through: 'productoxorden' });
Orden.belongsToMany(Category, { as: "product", through: 'productoxorden' });

module.exports = models;