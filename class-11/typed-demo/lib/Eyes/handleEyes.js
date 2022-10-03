'use strict';

const events = require('../eventEmitter.js');


function handleEyes(payload) {
  events.emit('brain', payload.brightness);
  if (payload.brightness > 70) {
    console.log('Dilate pupils');
  } else {
    console.log('un-dilate pupils');
  }
}

module.exports = handleEyes;
