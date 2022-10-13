# serverless-api

Deployed Link: 

## Overview
This project was setting up a RESTful API using AWS API Gateway. I created resources and methods on the API Gateway, and then attached them to lambda functions. Each request made to the server triggers a different lambda function. The project also used DynamoDB. The DB stored people with their id, name, and phone number. In the lambda functions I used dynamoose to interact with DynamoDB.

## API

endpoint: 

### GET
- GET /people
- returns a list of all people

</br>

- GET /people/:id
- find person by id, provide id as a parameter in the URL

### POST
- POST /people
- add a user to the database
- sample body
```js
{
  id: "1"
  name: "test user",
  age: 1,
  married: true,
}
```
- all values are different String, Nummber, Booleen 
- id and name are required in the body

### PUT
- PUT /people/:id
- updates the person by id, provide id as a parameter in URL
- provide the update information in the body
```js
{
  
}
```

### DELETE
- DELETE /people/:id
- delete person by id, provide id as a parameter in URL

