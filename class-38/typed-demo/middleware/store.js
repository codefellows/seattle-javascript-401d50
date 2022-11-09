'use strict';

const { createStore, applyMiddleware } = require('redux');
const { nameReducer, updateName, asyncUpdateName } = require('./name.js');
const logger = require('./loggerMiddleware.js');
const thunk = require('./thunk.js');

const store = createStore(nameReducer, applyMiddleware(logger, thunk));

store.dispatch(updateName('John'));
console.log('AFTER our action has updated state', store.getState());
store.dispatch(asyncUpdateName('JB'));
console.log('AFTER our async action has updated state', store.getState());
