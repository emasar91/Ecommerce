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
                allowNull: false,
                type: S.STRING,
                unique: false,
            },
            cantidad: {
                allowNull: false,
                type: S.STRING,
                unique: false,
            }    
        }
        , { timestamps: false });

    return O;
};

module.exports = Orden;