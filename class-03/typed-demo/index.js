'use strict';

const { start } = require('./lib/server.js');
const { db } = require('./lib/models');
const PORT = process.env.PORT || 3001;

db.sync()
  .then(() => {
    start(PORT);
  })
  .catch(error => {
    console.error(error);
  });
