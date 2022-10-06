'use strict';

const io = require('socket.io-client');
const MessageClient = require('./../Messages/MessageClient');
const handlePickup = require('./handlePickup');
const handleComplete = require('./handleComplete');

const URI = process.env.URI || 'http://localhost:3002/caps';
const socket = io.connect(URI);

const messageClient = new MessageClient('driver', URI);
messageClient.subscribe('received', payload => {
  console.log(payload);
});

messageClient.subscribe('message-driver', payload => {
  console.log(payload.message);
  messageClient.publish('received', payload);
});

messageClient.publish('get-messages', 'driver');

socket.on('pickup', handlePickup(socket, messageClient));
socket.on('complete', handleComplete);

module.exports = socket;
