# Class 33 - Auth Context and Auth Components

## Warm Up

Whiteboard Challenge: Sort an Array of Integers!

## Code Review

* Settings Context for Todos
  * pagination (Number -> 3)
  * sort field (String -> difficulty)
  * hide or display completed Todos (Boolean)
* Any volunteers for Code Review?

## Auth Context and Auth Behaviors

Context object stores the user, token, and capabilities, makes these available to `Consumers`,  gives the abilities to `login`, `logout`, and `authorize` capabilities.

## TDD: Login Components

* Login can display a form to `login` if a user is not `loggedIn`.
* Login displays a Button to `logout` if a user is `loggedId`.
* Auth displays `children` if a user is `loggedIn` and the user `can` authorize a `capability`.
* Auth hides `children` if a user is not `loggedIn` or the user `can` not authorize a `capability`.
