'use strict';

const io = require('socket.io-client');
const handleEyes = require('./handleEyes.js');

const socket = io.connect('http://localhost:3002/body');

socket.on('brightness', handleEyes(socket));
