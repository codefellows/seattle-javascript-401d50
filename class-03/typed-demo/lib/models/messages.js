'use strict';

const messagesSchema = (sequelize, DataTypes) => sequelize.define(
  'Messages',
  {
    text: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  }
);

module.exports = messagesSchema;

