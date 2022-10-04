'use strict';

const io = require('socket.io');
const PORT = process.env.PORT || 3002;

let server = io(PORT); // point client to http://localhost:3002

server.on('connection', (socket) => {
  console.log('Client connected', socket.id);

  socket.emit('welcome', {text: 'Welcome to our server'});
  server.emit('new-user', {text: 'A new user has joined'});

  socket.on('message', (payload) => {
    socket.broadcast.emit('message', payload);
  });
});
