'use strict';

const Events = require('events');
const events = new Events();


const observables = ['brightness', 'warmth'];

function handleEyes (payload) {
  events.emit('brain', payload);
  if (payload.brightness > 70) {
    console.log('Dilate pupils');
  } else {
    console.log('un-dilate pupils');
  }
}

function handleSkin(payload) {
  events.emit('brain', payload);
  if (payload.warmth > 75) {
    console.log('I am sweating');
  } else if (payload.warmth < 25) {
    console.log('I am shivvering');
  } else {
    console.log('I am fine, no changes');
  }
}

function handleBrain(payload) {
  console.log("CHANGE OCCURED", payload);
}

events.on('brightness', handleEyes);
events.on('warmth', handleSkin);
events.on('brain', handleBrain);

setInterval(() => {
  events.emit(observables[0], {
    brightness: Math.floor(Math.random() * 100),
  });
  events.emit(observables[1], {
    warmth: Math.floor(Math.random() * 100),
  })
}, 2000);
