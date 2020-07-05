const S = require('sequelize');
const Orden = (sequelize, S) => {
    // defino el modelo

    const O = sequelize.define('orden', {
        idOrden: {
            primaryKey: true,
            type: S.INTEGER,
            allowNull: false,
            autoIncrement: true,
        },
        estado: {
            type: S.STRING,
            defaultValue: 'abierto',
        },
    }, { timestamps: false });

    return O;
};

module.exports = Orden;