'use strict';

const app = require('../server.js');
const supertest = require('supertest');

const request = supertest(app);

describe('Testing our app', () => {
  test('Should respond with an array of messages on GET /message', async () => {
    const response = await request.get('/message');

    expect(response.status).toEqual(200);
    expect(Array.isArray(response.body)).toEqual(true);
  });
  test('Should respond with a single of message on GET /message/:id', async () => {
    const response = await request.get('/message/1');

    expect(response.status).toEqual(200);
    expect(response.body.id).toEqual('1');
  });
  test('Should respond with a new message POST /message', async () => {
    const response = await request.post('/message').send({
      text: 'Hello'
    });

    expect(response.status).toEqual(200);
    expect(response.body.text).toEqual("Hello");
  });

  test('Should respond with Bad Request when no text present on the request', async () => {
    const response = await request.post('/message');

    expect(response.status).toEqual(400);
    expect(response.text).toEqual("Bad Request");
  });
})
