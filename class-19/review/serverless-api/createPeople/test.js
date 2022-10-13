'use strict';

const friendsHandler = require('./');

console.log(friendsHandler);

friendsHandler.handler({})
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.log(error);
  });