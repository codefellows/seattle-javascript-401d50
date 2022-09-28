'use strict';

const { Sequelize, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const acl = require('./acl.json');
const API_SECRET = process.env.API_SECRET || 'CHANGE_ME';

const sequelize = new Sequelize(process.env.DATABASE_URL);

const Users = sequelize.define('User', {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  role: {
    type: DataTypes.ENUM("user", "writer", "editor", "admin"),
    defaultValue: "user",
  },
  token: {
    type: DataTypes.VIRTUAL,
    get() {
      // create our JWT and return it
      return jwt.sign({username: this.username}, API_SECRET);
    }, // getter method
    set(payload) {
      return jwt.sign(payload, API_SECRET);
    } // setter method
  },
  capabilities: {
    type: DataTypes.VIRTUAL,
    get() {
      return acl[this.role];
    },
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

Users.authenticateBearer = async function (token) {
 // verify the integrity using our SECRET!!
  try {
    const parsedToken = jwt.verify(token, API_SECRET);
    const user = await this.findOne({ where: { username: parsedToken.username }});
    if (user) {
      return user;
    }
  } catch (e) {
    throw new Error(e);
  }
}

module.exports = {
  Users,
  db: sequelize
}
