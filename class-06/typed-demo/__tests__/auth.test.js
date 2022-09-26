'use strict';

const { app, sequelize } = require('../app.js');
const supertest = require('supertest');
const request = supertest(app);

beforeAll(async () => {
  await sequelize.sync();
});
afterAll(async () => {
  await sequelize.drop();
});

describe('Testing our server', () => {
  test('testing signup route', async() => {
    const response = await request.post('/signup').send({
      username: 'test',
      password: 'test',
    });

    expect(response.body.username).toEqual('test');
    expect(response.body.password).not.toEqual('test');
  });

  test('testing signin route', async () => {
    const response = await request.post('/signin').auth('test', 'test');

    expect(response.body.username).toEqual('test');
    expect(response.body.password).not.toEqual('test');
  });
});
