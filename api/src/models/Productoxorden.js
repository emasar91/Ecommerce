const S = require('sequelize');
/* const Product = require('./Product'); */
// const Orden = (sequelize, S) => {
//     // defino el modelo

//     const O = sequelize.define('orden', {
//         idOrden: {
//             primaryKey: true,
//             type: S.INTEGER,
//             allowNull: false,
//             autoIncrement: true,
//         },
//         estado: {
//             type: S.STRING,
//             defaultValue: 'abierto',
//         },
//     }, { timestamps: false });

//     return O;
// };
const Productoxorden = (sequelize, S) => {
    const C = sequelize.define("productoxorden", {
        id: {
            type: S.INTEGER,
            allowNull: false,
            autoIncrement: true,
            unique: true,
            primaryKey: true,},
        cantidad: {
            type: S.INTEGER,
            allowNull: true,
        },
        precioVenta: {
            type: S.INTEGER,
            allowNull: true
        }
    },{ timestamps: false });

    return C;
};
module.exports = Productoxorden;