'use strict';

function logger(request, response, next) {
  console.log("REQUEST METHOD: " + request.method, "REQUEST PATH: " + request.path);
  next();
}

module.exports = logger;
