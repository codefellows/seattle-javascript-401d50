'use strict';

const MessageQueue = require('./../Messages/MessageQueue');
const driverQueue = new MessageQueue();
module.exports = {
  driver: driverQueue,
};