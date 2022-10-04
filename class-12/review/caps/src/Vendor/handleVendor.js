'use strict';

const events = require('../GlobalEventPool.js');

// use chance package
const Chance = require('chance');
const chance = new Chance();

// alert the 'system' of when I have a package to be picked up
// "1. As a vendor, I want to alert the system when I have a package to be picked up.""
let handleVendorPickupRequest = storeName =>
{
  // build out payload with chance.js
  let payload = {
    "store": storeName,
    "orderId": chance.guid(),
    "customer": chance.name(),
    "address": chance.address(),
  };
  events.emit('pickup', payload);
}


let handleVendorDelivered = payload =>
{
  events.emit(`Thank you, ${ payload.customer }`);
}

// listen for delivered events
// when a package gets delivered, respond to the ether with "Thank you, <customer-name"
// 5. "As a vendor, I want to be notified when my package has been delivered."
events.on('delivered', (payload) => handleVendorDelivered(payload));

// I want to be notified of when my package has been delivered (subscriber)

module.exports = {
  handleVendorPickupRequest,
  handleVendorDelivered
}
