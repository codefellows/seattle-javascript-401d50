'use strict';

const deletePeople = require('./index.js');

const event = {
  pathParameters: { id: 1 }
}

deletePeople.handler({ pathParameters: {id: '1'} })
  .then(response => {
    console.log(response);
  })
  .catch(err => {
    console.log(err);
  });
