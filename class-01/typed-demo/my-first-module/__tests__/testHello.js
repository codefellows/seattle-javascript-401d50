'use strict';

const supertest = require('supertest');
const app = require('../server.js');
const request = supertest(app); // provide express 'app' singleton;

describe('Testing our HTTP Server', () => {
    test('Should return an object with a name property, on GET to /hello', async () => {
        let response = await request.get('/hello');
        expect(response.status).toEqual(200);
        expect(response.body.name).toEqual('JACOB');
    });

    test('Should return an object with a name property, on GET to /params/:name', async () => {
        let response = await request.get('/params/jacob');
        expect(response.status).toEqual(200);
        expect(response.body.name).toEqual('jacob');
    });

    test('Should return an object with a name property and role property, on GET to /query?name=jacob&role=instructor', async () => {
        let response = await request.get('/query?name=Jacob&role=instructor');
        expect(response.status).toEqual(200);
        expect(response.body.name).toEqual('Jacob');
        expect(response.body.role).toEqual('instructor');
    });
});
