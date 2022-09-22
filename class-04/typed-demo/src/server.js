'use strict';

const express = require('express');
// const foodRouter = require('./routes/food.js');
const coffeeRouter = require('./routes/coffee.js');
const app = express();

// attach our routers to the app
app.use(express.json());
app.use(coffeeRouter);

module.exports = {
  start: (port) => {
    app.listen(port, () => {
      console.log("App is listening on port: " + port);
    });
  },
  app
}
