'use strict';

const io = require('socket.io-client');
const Chance = require('chance');

const url = process.env.SERVER_URL || 'http://localhost:3002/caps';
const chance = new Chance();

const socket = io.connect(url);

socket.emit('join', { clientId: 'Jacobs Code'});
socket.on('delivered', (payload) => {
  console.log("THANKS!!!", payload.customerName);
});

socket.emit('pickup', {
  clientId: 'Jacobs Code',
  orderId: chance.guid(),
  customerName: chance.name(),
});
