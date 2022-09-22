'use strict';


const foodSchema = (sequelize, DataTypes) => sequelize.define(
  'Food',
  {
    calories: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    ingredients: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    isSpicy: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    }
  }
);

module.exports = foodSchema;
