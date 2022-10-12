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
  phone: String,
});

const FriendModel = dynamoose.model("Friends", schema);

exports.handler = async (event) => {

  let friendsData = [];

  // do some dynamoose CRUD!
  if (event.pathParameters && event.pathParameters.id) {
    friendsData = await FriendModel.query('id').eq(event.pathParameters.id).exec();
  } else {
    friendsData = await FriendModel.scan().exec();
  }

  return {
    statusCode: 200,
    body: JSON.stringify(friendsData),
  }
}
