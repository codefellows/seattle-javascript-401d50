'use strict';

const coffeeSchema = (sequelize, DataTypes) => sequelize.define(
  'Coffee',
  {
    size: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    tax: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    blend: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    optionMilk: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    optionSugar: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    }
  }
);

module.exports = coffeeSchema;

