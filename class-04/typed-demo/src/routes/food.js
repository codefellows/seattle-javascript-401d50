'use strict';

const express = require('express');
const router = express.Router();

router.get('/food', (request, response) => {
  response.send('working on it');
})
router.get('/food/:id', (request, response) => {
  response.send('working on it');
})
router.post('/food', (request, response) => {
  response.send('working on it');
})
router.put('/food/:id', (request, response) => {
  response.send('working on it');
})
router.delete('/food/:id', (request, response) => {
  response.send('working on it');
})

module.exports = router;
