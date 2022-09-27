'use strict';

require('dotenv').config();
const { start } = require('./server.js');
const { db } = require('./auth/models/Users.js');
const PORT = process.env.PORT || 3001;

db.sync()
  .then(() => {
    start(PORT);
  })
