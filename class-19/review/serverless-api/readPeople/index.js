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

  const response = { statusCode: null, body: null };

  try {
    let peopleRecords = await peopleModel.scan().exec();
    response.statusCode = 200;
    response.body = JSON.stringify(peopledRecords);
} catch (e) {
    console.log(e);
    response.statusCode = 500;
    response.body = JSON.stringify(e.message);
}
};