'use strict';

const { Sequelize, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');

const sequelize = new Sequelize(process.env.DATABASE_URL);

const Users = sequelize.define('User', {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  }
});

Users.beforeCreate(async (user, options) => {
  const hashedPassword = await bcrypt.hash(user.password, 10);
  user.password = hashedPassword;
});

// static method on our Users Model
Users.authenticateBasic = async function(username, password) {
  try {
    const user = await Users.findOne({ where: { username: username } });
    const valid = await bcrypt.compare(password, user.password);
    if (valid) {
      return user;
    }
  } catch(e) {
    throw new Error(e);
  }
}

module.exports = {
  Users,
  db: sequelize
}
