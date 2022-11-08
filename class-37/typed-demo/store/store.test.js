'use strict';

const { vote } = require('./candidates');
const store = require('./app');

describe('Testing Store', () => {
  test('should be able read initial state', () => {
    let currentState = store.getState();
    expect(currentState.totalVotes).toEqual(0);
    expect(currentState.candidates.length).toEqual(3);
  });

  test('Should be able to vote!', () => {
    store.dispatch(vote('JB'));
    let currentState = store.getState();
    expect(currentState.totalVotes).toEqual(1);

    let JB = currentState.candidates.filter(candidate => candidate.name === 'JB')[0];
    expect(JB.votes).toEqual(1);
  })
})
