'use strict';

const { app, sequelize } = require('./app.js');

sequelize.sync().then(() => {
  app.listen(3001, () => {
    console.log('App is running');
  });
});
