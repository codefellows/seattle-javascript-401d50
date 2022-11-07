// all the values that our "Application state cares about"
const initialState = {
  candidates: [
    { name: 'Jacob', votes: 0 },
    { name: 'John', votes: 0 },
    { name: 'JB', votes: 0 }
  ],
  totalVotes: 0,
}

// VOTE action
// payload is a string that is a candidates name
export const vote = (payload) => {
  return {
    type: 'VOTE',
    payload: payload // 'Jacob' | 'John' | 'JB'
  }
}

// the function that produces a new state thing.
const voteReducer = (state = initialState, action) => {
  switch (action.type) {
    case "VOTE":
      // find the candidate specified by the payload
      return {
        candidates: state.candidates.map(candidate => {
          if (candidate.name === action.payload) {
            // increment their "votes" number.
            candidate.votes = candidate.votes + 1
          }
          return candidate;
        }),
        totalVotes: state.totalVotes + 1
      }
    default:
      return state;
  }
}

export default voteReducer;
