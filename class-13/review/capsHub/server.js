'use strict';

const io = require('socket.io');
const PORT = process.env.PORT || 3002;

const server = io(PORT);
const caps = server.of('/caps'); // sockets connect http://localhost:3002/caps

// this runs when a client connects to the caps server.
caps.on('connection', (socket) => {
  console.log('New Client connected!!');

  // join a room
  socket.on('join', (payload) => {
    socket.join(payload.clientId);
    console.log('Registered in room :', payload.clientId);
  });

  socket.on('pickup', (payload) => {
    console.log('EVENT OCCURRED :', 'pickup', payload);
    // emitting a notification to a room
    socket.to(payload.clientId).emit('pickup', payload);
  });

  socket.on('in-transit', (payload) => {
    console.log('EVENT OCCURRED :', 'in-transit', payload);
    // emitting a notification to a room
    socket.to(payload.clientId).emit('delivered', payload);
  });

  socket.on('delivered', (payload) => {
    console.log('EVENT OCCURRED :', 'delivered', payload);
    // emitting a notification to a room
    socket.to(payload.clientId).emit('delivered', payload);
  });
});
