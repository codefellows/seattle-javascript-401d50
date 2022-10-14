# Class 20 - Midterms!!

## Code Review / Module Review

* AWS SNS and SQS CAPS architecture.
  * Successes and struggles?
  * Are we suppose to use lambda functions?
    * Logging function: lambda make a great service for getting all events logged.
    * topics = events in the eventPool.
  * Permissions:
    * Who is running the code?
      * my computer
      * Lambda function
      * Heroku?
    * Does that code need to use an AWS service.

### Past Module

* Module 1 - Express and REST
  * Methods:
    * GET - READ
    * POST - CREATE
    * PATCH / PUT - UPDATE
    * DELETE - DELETE
  * URLS  / PATHS
    * resource /book
* Module 2 - Authorization and Authentication
  * Authentication - Who are you?
    * Basic - username:password
    * Bearer - pass a token
  * Authorization - Are you allowed to do something?
    * Role Based Access - give a User a role
      * Assigned capabilites / permissions to a given role.
* Module 3 - Realtime Events
  * Observer Pattern:
    * Subscriber and Publishers
    * Use an event (observable)
    * event pool of different events on our system.
  * Message Queues
    * Store messages on event payload in case the intended receipent is no able to receive notifications.
    * guarantee reads.

## Midterms

