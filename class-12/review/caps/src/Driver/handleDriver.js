'use strict';

const events = require('../GlobalEventPool.js');

// driver will listen for when there is a package in the `system` to be delivered (subscriber)

// I want to alert the system when I have picked up a package and it is `in-transit` (publisher)
// 3. "As a driver, I want to alert the system when I have picked up a package and it is in transit."
let handleDriverInTransit = payload =>
{
  // send a message to all listeners that I have picked up a package and it's on it way

  console.log(`DRIVER: picked up ${ payload.orderId }`);

  events.emit(`in-transit`, payload);
}

// I was to alert the `system` of when I have `delivered` a package (publisher)
// 4. "As a driver, I want to alert the system when a package has been delivered."
let handleDriverDelivered = payload =>
{
  // send a message out to all listeners that the package I had has been delivered

  console.log(`DRIVER: delivered ${ payload.orderId }`);

  events.emit(`delivered`, payload);
}

// listen for when a 'pickup' is send to the 'system'
// 2. "As a driver, I want to be notified when there is a package to be delivered."
events.on('pickup', (payload) => handleDriverInTransit(payload));
events.on('in-transit', (payload) => handleDriverDelivered(payload));


module.exports = {
  handleDriverInTransit,
  handleDriverDelivered
}
