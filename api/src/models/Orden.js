const S = require('sequelize');


const Orden = (sequelize, S) => {
    const O = sequelize.define("orden", {
        idOrden: {
            type: S.INTEGER,
            allowNull: false,
            autoIncrement: true,
            unique: true,
            primaryKey: true,
        },
        estado: {
            type: S.STRING,
            allowNull: false
        }
    }, { timestamps: false });
    return O;
};

module.exports = Orden;