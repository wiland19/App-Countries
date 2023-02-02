const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.

module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('activity', {

    id: {
      type: DataTypes.INTEGER,
      primaryKey:true,
    },
    
    name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    difficulty: {
      type: DataTypes.ENUM("1", "2", "3", "4", "5"),
      allowNull:true,
    },
    duration: {
      type: DataTypes.INTEGER,
      allowNull:true,
    },
    season: {
      type: DataTypes.ENUM("Summer", "Autumn", "Winter", "Spring"),
      allowNull:true,
    }

  
  }, {
    timestamps: false,
  }
)}
    