'use strict';

const express = require('express');
const { Messages } = require('./models');
const app = express();

app.use(express.json());
app.post('/message', async (request, response) => {
  let messageData = request.body;
  let messageRecord = await Messages.create(messageData);
  response.json(messageRecord);
});

module.exports = {
  start: (port) => {
    app.listen(port, () => {
      console.log('app is running!!');
    })
  },
  app,
}
