'use strict';

const { Sequelize, DataTypes } = require('sequelize');
const DATABASE_URL = process.env.DATABASE_URL || "sqlite::memory:";
const messagesSchema = require('./messages.js');

// sequelize singleton
// in production we want to add this object:
let herokuOptions = {
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    }
  }
}
let sequelize = new Sequelize(DATABASE_URL, process.env === 'production' ? herokuOptions : {});

let MessagesModel = messagesSchema(sequelize, DataTypes);

module.exports = {
  Messages: MessagesModel,
  db: sequelize,
}

