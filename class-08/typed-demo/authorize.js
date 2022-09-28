'use strict';

const authorize = (capability) => (request, response, next) => {
  try {
    console.log(request.user.capabilities, capability);
    if (request.user.capabilities.includes(capability)) {
      next();
    } else {
      response.status(403).send('Forbidden');
    }

  } catch(e) {
    next(e);
  }
}

module.exports = authorize;
