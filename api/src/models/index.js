const fs = require('fs');
const path = require('path');
const db = require('../db.js');
const { Sequelize } = require('sequelize');
//const Review = require('./Review.js');
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
        Orden = require('./Orden.js'),
        Review = require('./Review.js')
} = models

// Add model relationships here
db.Sequelize = Sequelize;


Product.belongsToMany(Category, { as: "category", through: 'productoxcategorias' }); //sprint1
Category.belongsToMany(Product, { as: "product", through: 'productoxcategorias' });

Product.belongsToMany(Orden, { as: "orden", through: 'productoxorden' }); //sprint2
Orden.belongsToMany(Product, { as: "product", through: 'productoxorden' });

User.belongsToMany(Orden, { as: "orden", through: 'ordenxuser' }); //sprint2
Orden.belongsToMany(User, { as: "user", through: 'ordenxuser' });

// const User_Profile = Sequelize.define('Orden', {
//     cantidad: S.INTEGER
// }, { timestamps: false });
// Orden.belongsToMany(User, { through: 'ordenxproduct' });
// Product.belongsToMany(Product, { through: 'ordenxproduct' });



// User.belongsToMany(Orden, {as: "userForOrder", through: 'ordenxuser'});

// Product.belongsToMany(Review, {as: "product", through: 'reviewxproducto'});
// User.belongsToMany(Review, {as: "userForReview", through: 'reviewxuser' });

module.exports = models;