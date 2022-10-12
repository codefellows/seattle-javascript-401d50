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

  // create a new friend
  let friendData = new FriendModel({ id: 'test', name: 'test', phone: 'test'});
  let friendRecord = await friendData.save(); // talks to the database.


  return {
    statusCode: 200,
    body: JSON.stringify(friendRecord)
  }
}
