'use strict';

const Chance = require('chance');
const chance = new Chance();

class MessageQueue {
  constructor() {
    this.messages = {}
  }

  // add a single message to the Queue
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
      throw new Error('Add Message Error', e);
    }
  }

  // read all message by clientId
  get(clientId) {
    try {
      return Object.keys(this.messages[clientId]).map(messageId => ({
        messageId,
        payload: this.messages[clientId][messageId]
      }));
    } catch(e) {
      console.log(e);
      throw new Error('Queue Get Error', e);
    }
  }

  // confirm that a message is read, and remove it from the Queue by clientId.
  read(clientId, messageId) {
    try {
      if (this.messages[clientId]) {
        delete this.messages[clientId][messageId];
        return {
          status: 'received',
          messageId
        }
      }
    } catch(e) {
      console.log(e);
      throw new Error('Message Read Error', e);
    }
  }
}

module.exports = MessageQueue;
