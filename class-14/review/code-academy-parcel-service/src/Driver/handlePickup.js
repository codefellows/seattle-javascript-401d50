'use strict';

const Chance = require('chance');
const chance = new Chance();

module.exports = (socket, messageClient) => (payload) => {

  console.log(payload.message);

  const driverId = chance.guid();
  payload.driverId = driverId;
  
  socket.emit('join', payload.storeId);
  socket.emit('join', driverId);
  setTimeout(() => {
    payload.event = 'in-transit';
    payload.message = `DRIVER: Order id ${payload.orderId} is in-transit`;
    socket.emit('log', payload);
    socket.emit('in-transit', payload);
  }, 3000);

  setTimeout(() => {
    payload.event = 'deliver';
    payload.message = `DRIVER: Order id ${payload.orderId} has been delivered`;
    socket.emit('log', payload);
    socket.emit('deliver', payload);
    messageClient.publish('message-vendor', payload);
  }, 6000);
};
