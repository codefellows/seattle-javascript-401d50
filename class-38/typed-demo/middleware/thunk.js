'use strict';

// thunkify action -> re-dispatch action when async things are done
const thunk = (store) => (next) => (action) => {
  // what is the action?? is it an object?
  return typeof action === 'function'
  // if it's anything else, we are assuming that action is a function
  // call the function and use store.dispatch on the result of the function call.
    ? action(store.dispatch, store.getState)
  // if not just call next with the action
    : next(action)
}

module.exports = thunk;
