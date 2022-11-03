'use strict';

const { Sequelize, DataTypes } = require('sequelize');
const Collection = require('./data-collection.js');
// TODO: Import your Models here and configure your Collections.

const DATABASE_URL = process.env.API_DATABASE_URL || 'sqlite:api:';

const sequelize = new Sequelize(DATABASE_URL);

module.exports = {
  api_db: sequelize,
  // export our collection
};
