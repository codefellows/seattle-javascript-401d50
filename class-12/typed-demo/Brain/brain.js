'use strict';

const io = require('socket.io');
const PORT = process.env.PORT || 3002;
const eventPool = require('../eventPool.js');

const server = io(PORT);
const body = server.of('/body'); // clients connect at http://localhost:3002/body

body.on('connection', (socket) => {
  console.log('Body part connected!');
  // socket.join('room-name');

  // logs every event in the event pool
  eventPool.forEach(event => {
    socket.on(event, (payload) => {
      console.log('EXPERIENCE SOMETHING :', payload);
    });
  });

  socket.on('brightness', (payload) => socket.broadcast.emit('brightness', payload));
  socket.on('warmth', (payload) => socket.broadcast.emit('warmth', payload));
});

module.exports = body;


