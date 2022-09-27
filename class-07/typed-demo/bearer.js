'use strict';

const { Users } = require('./Users.js');

async function Bearer(request, response, next) {
  try {
    let authHeader = request.headers.authorization.split(' '); // ['Bearer', "<JSON_WEB_TOKEN>"]
    let token = authHeader[1];

    const user = await Users.authenticateBearer(token);
    if (user) {
      request.user = user;
      next();
    } else {
      next('Invalid token');
    }
  } catch(e) {
    next(e);
  }
}

module.exports = Bearer;
