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

const PersonModel = dynamoose.model('People', schema);

module.exports = {

  handler: async (event) => {

    let deletedRecord = [];

    if(event.pathParameters && event.pathParameters.id) {
      deletedRecord = await PersonModel.delete(event.pathParameters.id);
    } else {
      deletedRecord = {message: 'record not found'};
    }

    return {
      statusCode: 200,
      body: JSON.stringify(deletedRecord),
    };
  },
};
