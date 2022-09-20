
function badRequest(error, request, response, next) {
  console.log(error);
  response.status(400);
  response.send('Bad Request');
}

module.exports = badRequest;
