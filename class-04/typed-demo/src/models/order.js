'use strict';

const orderSchema = (sequelize, DataTypes) => sequelize.define(
  'order',
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    customerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  }
);

module.exports = orderSchema;
