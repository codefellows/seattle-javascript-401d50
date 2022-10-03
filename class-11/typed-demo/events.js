'use strict';

const Events = require('events');
const events = new Events();

// observables
const eventPool = ['message-sent', 'message-received'];

// const messages = [];

// subscribing to the message-sent event
events.on(eventPool[0], (payload) => {
  console.log(payload);
  events.emit("message-received", payload);
});
events.on(eventPool[1], (payload) => {
  console.log("Message read: ", payload);
});

// emit this payload to anything that is listen (publishing)
events.emit(eventPool[0], {text: 'Hello!!!'});

