'use strict';

require('dotenv').config();
const { db, Users } = require('../Users.js');

beforeAll(async () => {
  await db.sync();
});
afterAll(async () => {
  await db.drop();
})

describe('Testing user model', () => {
  test('User model can create a token', async () => {
    const user = await Users.create({
      username: 'Test',
      password: 'Test'
    });

    console.log(user.token);
    expect(user.username).toEqual('Test');
    expect(user.token).toBeTruthy();
    expect(user.role).toEqual('user');
    expect(user.capabilities[0]).toEqual("read");
  });
});
