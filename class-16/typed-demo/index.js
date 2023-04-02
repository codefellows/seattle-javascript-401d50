'use strict';

const express = require('express');
const app = express();

const PORT = process.env.PORT || 3001;

app.get('/', (request, response) => {
  response.send(`
    <div>
      <h1>Please us one of the following routes!</h1>
      <ul>
        <li>GET /list</li>
        <li>GET /secret</li>
      </ul>
    </div>
  `);
});

app.get('/list', (request, response) => {
  response.json({
    one: 'test',
    two: 'test'
  });
});

app.get('/secret', (request, response) => {
  response.send('<h1>You made it to my secret area ;)</h1>');
});

app.listen(PORT, () => {
  console.log('App is listening on port :: ' + PORT);
});
