'use strict';

const { Sequelize, DataTypes } = require('sequelize');
const clothesModel = require('./clothes/model.js');
const foodModel = require('./food/model.js');
const Collection = require('./data-collection.js');

const DATABASE_URL = process.env.API_DATABASE_URL || 'sqlite:api:';

const sequelize = new Sequelize(DATABASE_URL);
const food = foodModel(sequelize, DataTypes);
const clothes = clothesModel(sequelize, DataTypes);

module.exports = {
  api_db: sequelize,
  food: new Collection(food),
  clothes: new Collection(clothes),
};
