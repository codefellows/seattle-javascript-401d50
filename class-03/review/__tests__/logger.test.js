'use strict';

const logger = require('../lib/middlewares/logger.js');

describe('testing logger middleware', () => {
  test('should log something when invoked', () => {
    jest.spyOn(console, 'log');

    const request = {
      method: 'TEST',
      path: 'TEST',
    };
    const response = {};
    const next = jest.fn();
    logger(request, response, next);
    expect(console.log).toHaveBeenCalledWith("REQUEST METHOD: " + request.method, "REQUEST PATH: " + request.path);
  });
});
