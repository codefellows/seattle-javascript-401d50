'use strict';

const io = require('socket.io-client');
const handleSkin = require('./handleSkin.js');

const socket = io.connect('http://localhost:3002/body');

socket.on('warmth', handleSkin(socket));

