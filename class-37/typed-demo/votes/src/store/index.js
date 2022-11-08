const { createStore, combineReducers } = require('redux');
const { candidateReducer, vote } = require('./candidates');
const voteReducer = require('./votes');

const reducers = {
  candidates: candidateReducer,
  totalVotes: voteReducer,
}

const store = createStore(combineReducers(reducers));

// This changes a lot, to allow react components to getState and dispatch Actions.
// store.dispatch(vote('John'));
// store.dispatch(vote('John'));
// console.log(store.getState());
// moved the above into a test file

module.exports = store;
