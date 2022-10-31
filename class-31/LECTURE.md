# Class 31 - React Context API

## Announcements

* Second Instructor 1 on 1s.
* Schedules for whiteboard will start to go out this week.
  * Weeks 8 and 9 will be exam times, please let me know if you want to go early.
  * If you think need practice go early.
  * If you fail you will get another chance.
* We will be having class remotely Wednesday Nov 2nd.
  * Join via Zoom and Remo.
* We are observing Veterans Day November 11th.
  * No class, All material for that day will be extra credit.
  * I will be available!

## Warm Up

Whiteboard Challenge:

## Review

Last Week - Atomic React Components

* Functional Components vs Class Based Component - One has objects one uses functions.

  * Class based components have an object attached to all values and behaviors or a component.

  * Class component need to use `this` to refer to values and behaviors.

  * Function components use a hook: useState.

* Hooks: React functions that "hook" into the react API.

  * useState: replaces `this.state` and `this.setState`.

   Used to add important values to a component.

  * useEffect:  Replaces lifecycle methods, componentDidMount, componentDidUpdate, componentDidUnmount.

  * useReducer: Manages large side effects, use a reducer function to give state our structure and allow a reducer function to keep the same shape.

## Context API

What? Why? How?

* Used for passing down data / behaviors without manually pass props.
* Utizilizes the observer pattern:
  * Providers: Components that supply "global" values to any component that is a child.
  * Consumers: Components that want to "opt-in" to values given by the "Provider".

## DEMO / TDD
