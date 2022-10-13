'use strict';

const AWS = require('aws-sdk');

const sns = new AWS.SNS({
  region: 'us-west-2'
});
const topic = 'arn:aws:sns:us-west-2:275199309843:alert';

// NEEDS an Endpoint
const params = {
  TopicArn: topic,
  Protocol: 'application',
  Endpoint: '',
}

sns.subscribe(params, (err, data) => {
  if(err) {
    console.log(err);
  } else {
    console.log(data);
  }
});
