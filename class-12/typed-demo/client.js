'use strict';

const io = require('socket.io-client');
const URL = process.env.SERVER_URL || 'http://localhost:3002';

let socket = io.connect(URL);

socket.on('welcome', console.log);
socket.on('new-user', (payload) => {
  console.log(payload.text);
});

socket.on('message', console.log);
socket.emit('message', {text: "Hello from client " + socket.id})
