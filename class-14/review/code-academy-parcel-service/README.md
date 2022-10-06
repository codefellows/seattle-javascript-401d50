# code-academy-parcel-service

## Overview
This is an app that uses socket.io to make TCP connections between clients. Each client connects to the server. The clients emit events such as package is ready for pickup, package is in-transit, the package has been received, and the delivery is complete. The server listens for all these events and than broadcasts to other clients that have connected so that they can also know the status of the package.

## Using this Code
- Start the server with the command ```node index.js``` in the root directory
- Start a driver by going into the Driver directory and also using the command ```node index.js```
- Start a vendor by going into the Vendor directory and also using the command ```node index.js```
  - The vendor will start the messaging with a notification for pickup

- Here's a screenshot of the terminals with a driver and two vendors
<img src='./img/lab13-1.png' width='100%' height='auto'>

- The driver has his own message queue to store unread messages
<img src='./img/lab13-2.png' width='100%' height='auto'>

- Each vendor has it's own message queue for delivery notification
<img src='./img/lab13-3.png' width='100%' height='auto'>


## Architecture
<img src='./img/lab12.png' width='100%' height='auto'>

## Change Log
- 10/03/2022 - Event emitter that will listen to for driver and vendor events and logs the action and order details
- 10/04/2022 - Added an event pool that calls event.on to for each event, index file logs all the events in order
- 10/04/2022 - Replace event emitter with socket.io and connect a vendor and driver to alert each other of package status