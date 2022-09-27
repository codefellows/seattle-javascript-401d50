'use strict';

const express = require('express');
const cors = require('cors');
const app = express();
const authRouter = require('./auth/routes/auth.js');

app.use(cors());
// allows JSON data to be attached to the request.
app.use(express.json());
// lets urlencoded values appear in the request body.
app.use(express.urlencoded({ extended: true }));

app.use(authRouter);

module.exports = {
  app,
  start: (port) => {
    app.listen(port, () => {
      console.log('App is listening');
    });
  },
}
