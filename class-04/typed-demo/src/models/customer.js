'use strict';

const customerSchema = (sequelize, DataTypes) => sequelize.define(
  'Customer',
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }
);

module.exports = customerSchema;
