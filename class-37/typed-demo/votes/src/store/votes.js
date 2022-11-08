const initialState = 0;

function voteReducer(state = initialState, action) {
  switch(action.type) {
    case "VOTE":
      return state + 1;
    default:
      return state;
  }
}

module.exports = voteReducer;
