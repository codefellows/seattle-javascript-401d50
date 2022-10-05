# Class 13 - Message Queue Server

## Review

* Things making more sense this morning.
* Testing:
  * Test the code you wrote, not the libraries that use the code.
  * Jest features (mock functions / mock libraries)
    * we don't care what code does that we didn't write, just that functionality exists.
* Refactor to socket.io
  * Cutting out code that we don't need anymore.
  * Before socket.io, we chained all our files together in a single "process".
    * Now each "entity" is it's own separate "process".
* Joining Rooms
  * using `socket.join('room-name')`.
    * best to create a separate event on the server to join a room by vendor name.
    * each server event should read the vendor name to send notifications to rooms in event handlers.

## Message Queue

* Guaranteed Message Receipts.
  * Listeners should always have a way to read messages sent to them.

* Messages Queue

* Messages Client

## DEMO: Message Queue Server
