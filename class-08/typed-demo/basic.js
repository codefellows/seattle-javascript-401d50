'use strict';

const { Users } = require('../models/Users.js');
const base64 = require('base-64');

async function basic(req, res, next) {
  let basicHeaderParts = req.headers.authorization.split(' ');  // ['Basic', 'sdkjdsljd=']
  let encodedString = basicHeaderParts.pop();  // sdkjdsljd=
  let decodedString = base64.decode(encodedString); // "username:password"
  let [username, password] = decodedString.split(':'); // username, password

  try {

    // const user = await Users.findOne({ where: { username: username } });
    // const valid = await bcrypt.compare(password, user.password);
    const user = await Users.authenticateBasic(username, password);
    if (user) {
      // attach to request
      req.user = user;
      // res.status(200).json(user);
      next();
    } else {
      // throw new Error('Invalid User');
      next('Invalid User');
    }
  } catch (error) {
    next(error);
   }
}

module.exports = basic;
