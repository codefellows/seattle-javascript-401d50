'use strict';

const MessageClient = require('./lib/MessageQueue/MessageClient.js');

const messages = new MessageClient('Chores');

messages.subscribe('message', (payload) => {
  console.log(payload);
  messages.publish('received', payload);
});

messages.publish('get-messages', {clientId: 'Chores'});
