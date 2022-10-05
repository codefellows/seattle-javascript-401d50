'use strict';

const MessageQueue = require('../lib/MessageQueue/MessageQueue.js');

describe('Testing the Queue', () => {

  test('Should be able to add a message to the queue', () => {
    let queue = new MessageQueue();
    let clientId = 'test-id';
    let payload = {message: 'hello'};

    let messageId = queue.add(clientId, payload);
    console.log(queue);
    expect(messageId).toBeTruthy();
    expect(queue.messages[clientId][messageId]).toEqual(payload);
  });

  test('Should be able to add two messages and get all of them', () => {
    let queue = new MessageQueue();
    let clientId = 'test-id';
    let payload1 = { message: 'hello' };
    let payload2 = { message: 'hello again'};

    let messageId1 = queue.add(clientId, payload1);
    let messageId2 = queue.add(clientId, payload2);
    let messageList = queue.get(clientId);
    console.log(messageList);
    expect(messageList.length).toEqual(2);
    expect(messageList[0].messageId).toEqual(messageId1);
  });

  test('Should be able to read and remove a message using clientId and messageId', () => {
    let queue = new MessageQueue();
    let clientId = 'test-id';
    let payload = { message: 'hello' };

    let messageId = queue.add(clientId, payload);
    let receipt = queue.read(clientId, messageId);
    expect(receipt.messageId).toEqual(messageId);
    expect(queue.messages[clientId][messageId]).not.toBeTruthy();
  })

});
