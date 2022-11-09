'use strict';

// run after the action is dispatched, but before state is changed
const logger = (store) => (next) => (action) => {
  console.log('LOGGER MIDDLEWARE RUNNING');
  console.log('CURRENT STATE', store.getState());
  console.log('ACTION THAT WAS DISPATCHED : ', action);
  next(action);
}

module.exports = logger;
