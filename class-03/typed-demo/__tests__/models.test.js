'use strict';

const { Messages, db } = require('../lib/models');

beforeAll(async () => {
  await db.sync();
});

describe('Testing our data models', () => {
  test('Should create a single message', async () => {
    let message = await Messages.create({
      text: 'My first message',
    });

    expect(message.id).toBeTruthy();
    expect(message.text).toEqual('My first message');
  });

  test('Should read from our messages table', async () => {
    let messages = await Messages.findAll();
    console.log(messages);
    expect(messages.length).toBeTruthy();
  });

  test('Should update a single message', async () => {
    await Messages.update({ text: "Updated Text!" },{ where: { id: 1 }});
    let message = await Messages.findOne({ where: { id: 1 }});
    expect(message.text).toEqual('Updated Text!');
  });

  test('Should be able to delete a message', async () => {
    await Messages.destroy({ where: { id: 1 }});
    let message = await Messages.findOne({ where: { id: 1 }});
    expect(message).not.toBeTruthy();
  });
})
