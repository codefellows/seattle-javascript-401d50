'use strict';

require('dotenv').config();
const express = require('express');
const app = express();
const { db, Users } = require('./Users.js');
const bearer = require('./bearer.js');
const authorize = require('./authorize.js');
const { response } = require('express');
const PORT = process.env.PORT || 3001;

app.use(express.json());

app.post('/signup', async (request, response) => {
  let user = await Users.create(request.body);
  response.status(201).send(user);
});

app.get('/secret', bearer, (request, response) => {
  response.send('you made it!!');
});

app.get('/authorized', bearer, authorize('read'), (request, response) => {
  response.send('You are authorized!!');
});

app.post('/writer', bearer, authorize('create'), (request, response) => {
  response.send('You are a writer!!');
});

app.put('/editor', bearer, authorize('update'), (request, response) => {
  response.send('You are at least an editor!!');
});

db.sync()
  .then(() => {
    app.listen(PORT, () => console.log('App is running!'));
  })
