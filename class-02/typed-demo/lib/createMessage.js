'use strict';

const createMessage = (messages) => (request, response, next) => {
  console.log(request.body);
  if (!request.body || !request.body.text) {
    next('Bad Request');
  } else {
    messages.push({
      id: messages.length + 1,
      text: request.body.text
    });
    response.json(messages[messages.length - 1]);
  }
}

module.exports = createMessage;
