'use strict';

const body = require('./brain.js');

setInterval(() => {
  body.emit('brightness', {
    brightness: Math.floor(Math.random() * 100),
  });
  body.emit('warmth', {
    warmth: Math.floor(Math.random() * 100),
  });
}, 3000);
