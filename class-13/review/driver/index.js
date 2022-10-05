'use strict';

const io = require('socket.io-client');
const Chance = require('chance');

const url = process.env.SERVER_URL || 'http://localhost:3002/caps';
const chance = new Chance();

const socket = io.connect(url);

socket.emit('join', { clientId: 'Jacobs Code' });

socket.on('pickup', (payload) => {
  console.log('ORDER PICKED UP', payload);

  socket.emit('in-transit', payload);
  console.log('ORDER IN TRANSIT', payload.orderId);
  socket.emit('delivered', payload);
  console.log('ORDER DELIVERED', payload.orderId);
});
