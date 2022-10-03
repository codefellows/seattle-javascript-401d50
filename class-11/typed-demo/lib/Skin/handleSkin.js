'use strict';

const events = require('../eventEmitter.js');

function handleSkin(payload) {
  events.emit('brain', payload.warmth);
  if (payload.warmth > 75) {
    console.log('I am sweating');
  } else if (payload.warmth < 25) {
    console.log('I am shivvering');
  } else {
    console.log('I am fine, no changes');
  }
}

module.exports = handleSkin;
