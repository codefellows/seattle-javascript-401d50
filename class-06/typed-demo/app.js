'use strict';

const express = require('express');
const base64 = require('base-64');
const bcrypt = require('bcrypt');
const { Sequelize, DataTypes } = require('sequelize');

// create a User Model

// Encrypt password info from the request when we create.
const sequelize = new Sequelize('sqlite:memory:');

const UserModel= sequelize.define('Users', {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
});

const app = express();
app.use(express.json()); // read JSON bodies

app.post('/signup', async (request, response) => {
  console.log(request.body);
  // here is our hash being created and stored.
  bcrypt.hash(request.body.password, 15).then(async hash => {
    let newUser = await UserModel.create({
      username: request.body.username,
      password: hash,
    });
    response.send(newUser);
  })
});

app.post('/signin', async (request, response) => {
  console.log(request.headers);

  // does our request contain auth headers?
  const encodedCredentials = request.headers.authorization.split(' ')[1];
  const decodedCredentials = base64.decode(encodedCredentials);
  console.log(decodedCredentials);
  const [ username, password ] = decodedCredentials.split(':');

  // check if username exists / is Validate
  try {
    let user = await UserModel.findOne({ where: { username }});
    let isValid = await bcrypt.compare(password, user.password);
    if(isValid) {
      response.status(200);
      response.json(user);
    }
  } catch(e) {
    response.status(401);
    response.send(e);
  }
});

module.exports = {
  app,
  sequelize
};

// sequelize.sync().then(() => {
//   app.listen(3001, () => {
//     console.log('App is running');
//   });
// });
