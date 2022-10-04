# Class 12 - Socket.io (Server and Client)

## Review

* Understanding the prompt:
  * Ambiguous nature of the requirements
  * Just getting console to happen in a specific order.

* PseudoQueue challenge?
  * Creating a Queue using 2 Stacks.
  * Getting the logic figured out / not time to finish the challenge.

## OSI Model

Communication standards for computers.

7 layers

The top layer is more user facing, the bottom layer is very computery.

7 layer application layer - HTTP / FTP / IMAP

* Express == HTTP
* Stateless, a request is sent and response returned.
* Once response is returned connection is ended.

TCP lives on the 4th layer - Transport layer

* Socket.io == TCP
* Connection is sustained between 2 machines.
* Full Duplex, information can flow between both machines simultaneously.

bottom layer is physical (electrons flowing between physical systems)

### Moving from HTTP to TCP

