'use strict';

require('dotenv').config();
const { start } = require('./lib/server.js');
const { api_db } = require('./lib/models');
const { auth_db } = require('./lib/auth/models');
const PORT = process.env.PORT

auth_db.sync()
  .then(() => api_db.sync())
  .then(() => {
    start(PORT);
  });

