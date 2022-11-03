const { app } = require('../lib/server.js');
const { auth_db, users } = require('../lib/auth/models');
const { api_db } = require('../lib/models');
// const jwt = require('jsonwebtoken');
const supertest = require('supertest');
// this just makes http requests.
const request = supertest(app);

let token = null;

beforeAll(async () => {
  await auth_db.sync();
  await api_db.sync();
  let user = await users.create({
    username: 'test',
    password: 'test'
  });
  token = user.token;
});
afterAll(async () => {
  await auth_db.drop();
  await api_db.drop();
});

describe("testing our api routes",() => {
  test('Should return an OKAY response', async () => {
    let response = await request.get('/api/v2/todos').set('Authorization', `Bearer ${token}`);

    expect(response.status).toEqual(200);
    expect(response.text).toEqual('In Progress');
  });
});
