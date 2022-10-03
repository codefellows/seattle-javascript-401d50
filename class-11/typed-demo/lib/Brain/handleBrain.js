'use strict';

const events = require('../eventEmitter.js');

function handleBrain(payload) {
  console.log("CHANGE OCCURED", payload);
}

module.exports= handleBrain;
