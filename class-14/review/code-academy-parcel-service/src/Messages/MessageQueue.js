'use strict';

const Chance = require('chance');
const chance = new Chance();

class MessageQueue {
  constructor() {
    this.messages = {};
  }

  add(clientId, payload) {
    let messageId = chance.guid();

    try {
      if(this.messages[clientId]) {
        this.messages[clientId][messageId] = payload;
      } else {
        this.messages[clientId] = { [messageId]: payload };
      }
      return messageId;
    } catch(e) {
      console.log(e);
      throw new Error('Add message error', e);
    }
  }

  get(clientId) {
    try {
      console.log(this.messages);
      return Object.keys(this.messages[clientId]).map(messageId => ({
        messageId: messageId,
        payload: this.messages[clientId][messageId],
      }));
    } catch(e) {
      console.log(e);
      throw new Error('Queue get error', e);
    }
  }

  read(clientId, messageId) {
    try {
      if(this.messages[clientId]) {
        delete this.messages[clientId][messageId];
        return ({
          status: 'received',
          messageId,
        });
      } else {
        throw new Error('Error reading message');
      }
    } catch(e) {
      console.log(e);
    }
  }
}

module.exports = MessageQueue;