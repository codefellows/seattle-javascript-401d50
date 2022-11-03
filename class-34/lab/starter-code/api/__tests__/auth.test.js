const { app } = require('../lib/server.js');
const { auth_db } = require('../lib/auth/models');
const jwt = require('jsonwebtoken');
const supertest = require('supertest');
// this just makes http requests.
const request = supertest(app);

const SECRET = process.env.SECRET || 'secretstring';

beforeAll(async () => {
  await auth_db.sync();
});
afterAll(async () => {
  await auth_db.drop();
});

describe('Testing the auth features', () => {

  test('Should sign up a new user', async () => {
    let response = await request.post('/signup').send({ username: "test-user", password: 'test'});

    // console.log(response);
    expect(response.status).toBe(201);
    expect(response.body.user.username).toEqual('test-user');
    expect(response.body.token).toBeTruthy();
  });

  test('Should sign in an existing user', async () => {
    let response = await request.post('/signin').auth("test-user", 'test');

    // console.log(response);
    expect(response.status).toBe(200);
    expect(response.body.user.username).toEqual('test-user');
    expect(response.body.token).toBeTruthy();
    expect(jwt.verify(response.body.token, SECRET)).toBeTruthy();
  });
});


