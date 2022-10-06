'use strict';

const MessageQueue = require('./../src/MessageQueue');
const messageQueue = new MessageQueue();
const clientId = 'test-id';

describe('Testing the queue', () => {
  test('Should be able to add a message to the queue', () => {
    const payload = {message: 'hello'};

    const messageId = messageQueue.add(clientId, payload);
    expect(messageId).toBeTruthy();
    expect(messageQueue.messages[clientId][messageId]).toEqual(payload);
  });

  test('Should be able to get all the messages from the queue', () => {
    // add a second message to the queue, should get both back
    const payload = {message: 'hello again'};

    const messageId = messageQueue.add(clientId, payload);
    expect(messageId).toBeTruthy();
    expect(messageQueue.messages[clientId][messageId]).toEqual(payload);

    const messageObject = messageQueue.get(clientId);
    expect(messageObject).toBeTruthy();
  });

  test('Should be able to read and delete a message from the queue', () => {
    const payload = {message: 'goodbye'};
    const messageId = messageQueue.add(clientId, payload);
    const receipt = messageQueue.read(clientId, messageId);
    expect(receipt).toBeTruthy();
    expect(messageQueue.messages[clientId][messageId]).not.toBeTruthy();
  });
});
