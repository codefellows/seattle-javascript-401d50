# Class 32 - Context Behaviors

## Warm Up

Whiteboard Challenge: Create A Navigation feature!

* Navigate to a URL String
* Go backwards to the previously visited URL string.
* Go forwards to URLs visited before navigating "backwards".

## Code Review

* What do you need?
  * When is a good time to use Context vs no setting up Context?
    * Used it already for Auth tokens.
      * No longer passing those tokens directly through props.
    * Setting up socket connections.
      * Specific components that might need access to a connected socket object.
  * Not so appropriate for Context.
    * Don't want to use global.
      * Long-Lists of things -> only a list component would care about.

* Pagination - limits displayed Todos to a number (set in context).
  * Go forwards and backwards by that number.
* Custom Form Hook
  * +1 on the form hook.
  * Custom Hooks in general.
  * There are some bugs (not intentional).

## Context Behaviors (methods)

Change or update global values.

* If we pass setters down directly we are giving users the power to break our app.
* Context is responsible for managing it's values and giving that responsibility to components.
* Handle errors and manage state using methods and specific behaviors.

## DEMO: Changing Theme and Settings Values
