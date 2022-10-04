'use strict';

// import Event() object that everything is on
const events = require('../src/GlobalEventPool');

// import the hub (the logger)
const hub = require('../client.js');

// import vendor functions
const handleVendor = require('../src/Vendor/handleVendor.js');

// import driver functions
const handleDriver = require('../src/Driver/handleDriver.js');

// use chance package
const Chance = require('chance');
const chance = new Chance();

describe('testing event handlers', () => {

  test('Should ', () => {
    jest.spyOn(console, "log");
    jest.spyOn(events, "emit");
    jest.spyOn(events, "on");

    handleVendor.handleVendorPickupRequest('wal-mart');
  });
});
