'use strict';

const express = require('express');
const { Coffee } = require('../models');
const router = express.Router();

router.get('/coffee', readCoffee);
router.get('/coffee/:id', readOneCoffee);
router.post('/coffee', createCoffee);
router.put('/coffee/:id', (request, response, next) => {
  response.send('working on it');
});
router.delete('/coffee/:id', (request, response, next) => {
  response.send('working on it');
});

async function readCoffee(request, response, next) {
  let coffeeRecords = await Coffee.read();
  response.status(200);
  response.send(coffeeRecords);
}

async function readOneCoffee(request, response, next) {
  let coffeeRecord = await Coffee.read(request.params.id);
  response.status(200);
  response.send(coffeeRecord);
}

async function createCoffee(request, response, next) {
  let coffeeRecord = await Coffee.create(request.body);
  response.status(200);
  response.send(coffeeRecord);
}

module.exports = router;
