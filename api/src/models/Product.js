const Product = (sequelize, S) => {
  // defino el modelo
  const P = sequelize.define('product', {
    id: {
      primaryKey: true,
      type: S.INTEGER,
      allowNull: false,
      autoIncrement: true,
    },
    
    titulo: {
      allowNull: false,
      type: S.STRING,
    },
    
    descripcion: {
      type: S.STRING,
    },
    
    precio: {
      type: S.INTEGER,
      allowNull: false,
    },
    
    cantidad: {
      type: S.INTEGER,
      allowNull: false,
    },


  });
  
  return P;
};

module.exports = Product;
