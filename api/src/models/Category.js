const S = require('sequelize');
const Category = (sequelize, S) => {
  // defino el modelo
  
  const C = sequelize.define('category', { 
    id: {
        primaryKey: true,
        type: S.INTEGER,
        allowNull: false,
        autoIncrement: true,
      },
    nombre: {
        allowNull: false,
        type: S.STRING,
      },
  });
  
  return C;
};

module.exports = Category;
