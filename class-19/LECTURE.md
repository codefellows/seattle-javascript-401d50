# Class 19 - AWS Events

## Warm Up

Fizz Buzz Tree:

* Traverse a k-ary tree.
* change values in tree nodes,
  * if value is divisible by 3 - 'fizz'
  * if value is divisible by 5 - 'buzz'
  * if value is divisible by both - 'fizzbuzz'
  * if none of the above - convert number to string.

## Code Review

What Went well?

* Lambda -> Dynamo DB????
* Using Dynamo DB was nice
  * Assuming Putting stuff in would be tough.
* Lambda Code??
  * Easier to write in VS Code vs Lambda Code editor?

What do you need to know?

* Lambda functionality to Dynamo DB?
  * read / write / update / delete
* How to Update / Delete?
  * getting the id pathParameter.

```javascript

exports.handler =async (event) => {
  console.log(event.queryStringParameters)
}

```

## Events with SNS

What is SNS?

* Simple Notification Service
  * Sends notification messages to other clients.
  * This is socket.io in the cloud.
  * Publishers / Subscribers.
    * Clients (phone messenger, email notification).
* Organized by "topic"
  * each event in our eventPool is a new topic for SNS.

## Messages with SQS

* Simple Queue Service
  * Stores and managed a list of messages, to guarantee that something (not all things) have read the message.
