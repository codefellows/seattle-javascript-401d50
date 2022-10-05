'use strict';

const io = require('socket.io-client');

// provide a consistent interface for publishing and subscribing
class MessageClient {
  constructor(clientId, url = 'http://localhost:3002/messages') {
    this.clientId = clientId;
    this.socket = io.connect(url);
  }

  subscribe(event, handler) {
    this.socket.emit('join', { clientId: this.clientId });
    this.socket.on(event, handler);
  }

  publish(event, payload = {}) {
    this.socket.emit(event, {
      body: payload,
      clientId: this.clientId,
    });
  }
}

module.exports = MessageClient;
