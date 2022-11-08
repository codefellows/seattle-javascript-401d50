'use strict';

const initialState = [
  { name: 'Jacob', votes: 0 },
  { name: 'John', votes: 0 },
  { name: 'JB', votes: 0 },
];

function vote(payload) {
  return {
    type: 'VOTE',
    payload: payload,
  }
}

function candidateReducer(state = initialState, action) {
  switch (action.type) {
    case 'VOTE':
      return state.map(candidate => {
        if (candidate.name === action.payload) {
          candidate.votes = candidate.votes + 1;
        }

        return candidate;
      });
    default:
      return state;
  }
}

module.exports = {
  vote,
  candidateReducer
}

