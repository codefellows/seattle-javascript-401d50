'use strict';

const { createStore, combineReducers } = require('redux');
const { candidateReducer, vote } = require('./candidates');
const voteReducer = require('./votes');

const reducers = {
  candidates: candidateReducer,
  totalVotes: voteReducer,
}

const store = createStore(combineReducers(reducers));

store.dispatch(vote('John'));
store.dispatch(vote('John'));
console.log(store.getState());
