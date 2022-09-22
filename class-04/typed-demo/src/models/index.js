'use strict';

const foodSchema = require('./food.js');
const coffeeSchema = require('./coffee.js');
const customerSchema = require('./customer.js');
const orderSchema = require('./order.js');
const Collection = require('./Collection.js');
const { Sequelize, DataTypes } = require('sequelize');

const DATABASE_URL = process.env.NODE_ENV === 'test' ? 'sqlite::memory:' : process.env.DATABASE_URL;

let sequelize = new Sequelize(DATABASE_URL);

const FoodModel = foodSchema(sequelize, DataTypes);
const CoffeeModel = coffeeSchema(sequelize, DataTypes);
const OrderModel = orderSchema(sequelize, DataTypes);
const CustomerModel = customerSchema(sequelize, DataTypes);

// Add associations
CustomerModel.hasMany(OrderModel, { foreignKey: 'customerId', sourceKey: 'id'});
OrderModel.belongsTo(CustomerModel, { foreignKey: 'customerId', targetKey: 'id'});

module.exports = {
  db: sequelize,
  Coffee: new Collection(CoffeeModel),
  Food: new Collection(FoodModel),
  Orders: new Collection(OrderModel),
  Customers: new Collection(CustomerModel)
}
