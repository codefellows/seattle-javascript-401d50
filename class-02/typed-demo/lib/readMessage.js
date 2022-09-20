// express function that can read from an array, and find an object by ID property


const readMessage = (messages) => (request, response, next) => {
  let result = null;
  console.log(messages, request.params);
  for (let message of messages) {
    if (message.id === request.params.id) {
      result = message;
    }
  }
  if (!result) {
    next('no message found');
  } else {
    response.json(result);
  }
}

module.exports = readMessage;
