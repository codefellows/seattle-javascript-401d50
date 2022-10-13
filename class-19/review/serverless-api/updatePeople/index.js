'use strict';

const dynamoose = require('dynamoose');

const schema = new dynamoose.Schema({
  id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
  },
  married: {
    type: Boolean,
  },
});

const peopleModel = dynamoose.model('People', schema);

exports.handler = async (event) => {

  let peopleData = [];

 
  if (event.pathParameters && event.pathParameters.id) {
    peopleData = await people.query('id').eq(event.pathParameters.id).exec();
  } else {
    peopleData = await people.scan().exec();
  }

  return {
    statusCode: 200,
    body: JSON.stringify(peopleData),
  }
}