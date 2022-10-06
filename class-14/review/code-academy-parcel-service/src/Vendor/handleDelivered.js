'use strict';

module.exports = (socket, messageClient) => (payload) => {
  console.log(payload.message);
  payload.event = 'received';
  payload.message = `Recipient received order id: ${payload.orderId}`;
  socket.emit('log', payload);
  socket.emit('complete', payload);

  messageClient.emit('message', payload);
};
