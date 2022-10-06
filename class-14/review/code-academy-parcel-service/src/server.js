'use strict';

const io = require('socket.io');
const PORT = process.env.PORT || 3002;
const server = io(PORT);
const logger = require('./logEvents');
const MessageQueue = require('./Messages/MessageQueue');

// this is an object that holds all the queues
// it starts wit only a driver queue
const queues = require('./Messages/queues');

const observables = ['in-transit', 'deliver', 'complete'];

const caps = server.of('/caps');

caps.on('connection', async (socket) => {

  socket.on('log', logger);

  socket.on('join', payload => {
    socket.join(payload);
    queues[payload] = new MessageQueue(); //creates a new Queue for a client that joins
  });

  socket.on('message-vendor', (payload) => {
    queues[payload.storeId].add(payload.storeId, payload.message);
    console.log('MESSAGE SENT: Store queue', queues[payload.storeId]);
    socket.to(payload.storeId).emit('message', payload);
  });

  socket.on('message-driver', (payload) => {
    queues['driver'].add(payload.storeId, payload.message);
    console.log('MESSAGE SENT: Driver queue', queues['driver']);
    socket.to(payload.storeId).emit('message', payload);
  });

  socket.on('get-messages', payload => {
    console.log(payload, queues);
    queues[payload].get(payload).forEach(message => {
      socket.emit('message', message);
    });
  });

  socket.on('received', payload => {
    let receipt = queues[payload.storeId].read(payload.storeId, payload.body.messageId);
    console.log('MESSAGE REMOVED', payload.message);
    socket.to(payload.storeId).emit('received', receipt);
  });

  socket.on('pickup', payload => {
    socket.broadcast.emit('pickup', payload);
  });

  observables.forEach(event => {
    socket.on(event, (payload) => socket.to(`${payload.storeId}`).emit(event, payload));
  });

});

module.exports = server;

