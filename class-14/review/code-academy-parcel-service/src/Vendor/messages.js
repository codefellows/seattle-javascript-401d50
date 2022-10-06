'use strict';

const MessageClient = require('./../Messages/MessageClient');

const messages = new MessageClient('id');

messages.subscribe('received', payload => {
  console.log(payload);
});

messages.publish('message', {
  test: 'hell from sender!!',
});