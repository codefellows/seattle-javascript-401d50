'use strict';

const createFriend = require('./index.js');

createFriend.handler()
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.log(error);
  });
