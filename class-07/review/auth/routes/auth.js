'use strict';

const express = require('express');
const basic = require('../middlewares/basic.js');
const { Users } = require('../models/Users');

const router = express.Router();

router.post('/signup', async (req, res) => {
  try {
    const record = await Users.create(req.body);
    res.status(201).json(record);
  } catch (e) {
    console.log(e);
    res.status(403).send('Error Creating User');
  }
});

router.post('/signin', basic, (req, res) => {
  res.status(200).send(req.user);
});

module.exports = router;
