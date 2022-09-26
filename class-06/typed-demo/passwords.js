'use strict';

// our encoding library
const base64 = require('base-64');
// our encryption, 1 way encryption.
const bcrypt = require('bcrypt');

let username = 'Jacob';
let password = 's@p3rs3cret!';

let credentials = `${username}:${password}`;
let encodedCredentials = base64.encode(credentials);
console.log(credentials, encodedCredentials);

let decodedCredentials = base64.decode(encodedCredentials);

console.log(credentials == decodedCredentials);

let complexity = 5;
// 2 params, string to encrypt, and complexity value
bcrypt.hash(password, complexity)
  .then(encryptedPassword => {
    console.log(encryptedPassword);

    // 2 things, unencrypted string to compare, and ecrypted string.
    console.log(password, encryptedPassword);
    bcrypt.compare('s@p3rs3cret!', '$2b$05$dUPBsRBoD3A0JllOtJZpleSjMAau7P4j5dOmpOl8KshCiJjXMWHJy').then(isValid => console.log(isValid));
  })
