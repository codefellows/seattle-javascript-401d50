const Chance = require('chance');
const chance = new Chance();

module.exports = (socket, messageClient, storeId) => {

  const orderDetails = {
    storeId: storeId,
    orderId: chance.guid(),
    customer: chance.name(),
    address: chance.address(),
    event: '',
    message: '',
  };

  orderDetails.event = 'pickup';
  orderDetails.message = `${orderDetails.customer.toUpperCase()} has order ready for pickup at ${orderDetails.address} `;
  socket.emit('join', orderDetails.storeId);
  socket.emit('log', orderDetails);
  socket.emit('pickup', orderDetails);

  messageClient.publish('message-driver', orderDetails);
};