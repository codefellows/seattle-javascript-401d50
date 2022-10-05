'use strict';

const io = require('socket.io');
const PORT = process.env.PORT || 3002;
const MessageQueue = require('./lib/MessageQueue/MessageQueue.js');

const server = io(PORT);
const messages = server.of('messages');
const outGoing= new MessageQueue();
const recievedQueue = new MessageQueue();

messages.on('connection', (socket) => {

  console.log('Socket Connected!!', socket.id);
  socket.on('join', (payload) => {
    console.log('Room registered', payload.clientId);
    socket.join(payload.clientId);
  });

  socket.on('message', (payload) => {
    console.log("MESSAGE SENT", payload);
    outGoing.add(payload.clientId, payload.body);
    socket.to(payload.clientId).emit('message', payload);
  });

  // client needs all messages from a clientId
  socket.on('get-messages', (payload) => {
    outGoing.get(payload.clientId).forEach(message => {
      // this emits back to the same client that published the "get-messages"
      socket.emit('message', message);
    });
  });

  socket.on('received', (payload) => {
    let receipt = outGoing.read(payload.clientId, payload.body.messageId);
    console.log("MESSAGE REMOVED", payload);
    socket.to(payload.clientId).emit('received', receipt);
  });
});
