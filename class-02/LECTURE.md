# Class 02 - Express Framework

## Warm Up

```javascript

function map (values, callback) {

  if (Array.isArray(values)) {
    let newArray = [];
    for (let i= 0; i < values.length; i++) {
      newArray[i] = callback(values[i], i);
    }
    return newArray;
  } else {
    let newObj = {}
    let keys = Object.keys(values); // ["hot", "sunny"]
    for (let i= 0; i < keys.length; i++) {
      newObj[keys[i]] = callback(keys[i], values[keys[i]]);
    }
    return newObj;
  }
}

```

## Review

Troubles with deployment!

* Build successfully but application is getting errors.
* Using entry points, running code that is exported.
* We don't test entry points, instead we use them in different environments.
* Not a fan of of invision.

## Express

HTTP REST Framework.

### Routing

Express will capture a request, and towards some "function" that is defined on the "app" singleton.

### Middleware

Express defines middleware, as any function that comes between the request and the response.

We can pass a request object to the next middleware by calling the `next` function.

```javascript

app.get('/add', (request, response, next) => {
  console.log('middleware hit');
  next();
}, (request, response) => {
  response.send('You made it');
});

```

### Error Handling

by default express has a backed in 404 and 500 error.
* 404 are routes / resources not found.
* 500 are server errors.

Pass an argument into the `next` function.

define your own error handlers, define an error parameter, in a middleware function.

```javascript

app.get('/add', (request, response) => {
  if (!request.header.authorization) {
    next('unauthorized');
  }
  response.send('All good');
});

app.use(errorHandler);

function errorHandler(error, request, response, next) {
  console.log(error);
  response.status(401);
  response.send(error);
}


```

## Demo: TDD RESTful Web Service
