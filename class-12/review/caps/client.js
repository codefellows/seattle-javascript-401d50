// 'use strict';

// import Events object instance from the dedicated eventEmitter file
const events = require('./src/GlobalEventPool');

// use chance package
const Chance = require('chance');
const chance = new Chance();

let logger = (payload, eventName) =>
{
  let event = {
    "event": eventName,
    // chance.js random date object generator 
    "time": chance.date(),
    "payload": payload,
  }
  console.log("EVENT", event);
  // events.emit("EVENT", event);
};

// these are event listeners, that'll run when it 'hears' any event
// it'll log a timestamp and the payload of every event
events.on('pickup', (payload) => logger(payload, 'pickup'));
events.on('in-transit', (payload) => logger(payload, 'in-transit'));
events.on('delivered', (payload) => logger(payload, 'delivered'));
