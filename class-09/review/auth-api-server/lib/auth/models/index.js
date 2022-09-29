'use strict';

const userModel = require('./users.js');
const { Sequelize, DataTypes } = require('sequelize');

const DATABASE_URL = process.env.AUTH_DATABASE_URL || 'sqlite:auth:';

const sequelize = new Sequelize(DATABASE_URL);

module.exports = {
  auth_db: sequelize,
  users: userModel(sequelize, DataTypes),
}
