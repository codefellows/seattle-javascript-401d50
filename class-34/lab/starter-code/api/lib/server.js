'use strict';

const express = require('express');
const cors = require('cors');
const authRoutes = require('./auth/routes.js');
const v1 = require('./routes/v1.js');
const v2 = require('./routes/v2.js');
const bearer = require('./auth/middleware/bearer.js');
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(authRoutes);
app.use('/api/v1', v1);
app.use('/api/v2', bearer, v2);

module.exports = {
  app,
  start: (port) => {
    app.listen(port, () => console.log('App is running on port :: ' + port));
  }
}
