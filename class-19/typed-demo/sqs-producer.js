'use strict';

const { Producer } = require('sqs-producer');
const Chance = require('chance');

const chance = new Chance();

const producer = Producer.create({
  queueUrl: 'https://sqs.us-west-2.amazonaws.com/275199309843/Alerts',
  region: 'us-west-2',
});

const message = {
  id: chance.guid(),
  body: 'Here is my message from node!',
}

producer.send(message)
  .then(response => {
    console.log(response);
  }).catch(e => {
    console.log(e);
  })
