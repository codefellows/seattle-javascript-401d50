'use strict';

const { Consumer } = require('sqs-consumer');

const app = Consumer.create({
  queueUrl: 'https://sqs.us-west-2.amazonaws.com/275199309843/Alerts',
  handleMessage: (payload) => {
    console.log('NEW MESSAGE:', payload);
    let messageBody = JSON.parse(payload.Body);
    console.log(messageBody);

    // maybe stop consuming?
    // app.stop();
  },
});

// grab any message in the queue and continue listening,
app.start();
