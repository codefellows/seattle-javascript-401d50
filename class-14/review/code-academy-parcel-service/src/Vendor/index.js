'use strict';

const io = require('socket.io-client');
const handlePickup = require('./handlePickup');
const handleDelivered = require('./handleDelivered');
const handleTransit = require('./handleTransit.js');
const MessageClient = require('./../Messages/MessageClient');
const Chance = require('chance');

const URI = process.env.URI || 'http://localhost:3002/caps';
const socket = io.connect(URI);

const chance = new Chance();
const storeId = chance.guid();

const messageClient = new MessageClient(storeId, URI);
messageClient.subscribe('received', payload => {
  console.log(payload);
});

messageClient.subscribe('message-vendor', payload => {
  console.log(payload.message);
  messageClient.publish('received', payload);
});

handlePickup(socket, messageClient, storeId);

socket.on('in-transit', handleTransit);
socket.on('deliver', handleDelivered(socket, messageClient));

module.exports = socket;
