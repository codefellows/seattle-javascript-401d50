'use strict';
// server logic goes here

const express = require('express');
const cors = require('cors');

const readMessage = require('./lib/readMessage.js');
const createMessage = require('./lib/createMessage');
const badRequest = require('./lib/badRequest.js');
const app = express();
app.use(cors());
app.use(express.json());

function logger(request, response, next) {
  request.message = 'hello from logger';
  next();
}

app.get('/add', logger, (request, response) => {
  console.log(request.message);
  response.send('You made it');
});

let messages = [{
  id: `1`,
  text: 'test message'
}];

app.get('/message', logger, (request, response) => {
  response.send(messages);
});
app.get('/message/:id', logger, readMessage(messages));
app.post('/message', logger, createMessage(messages));

app.use(badRequest);

module.exports = app;
