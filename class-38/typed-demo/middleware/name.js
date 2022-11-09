'use strict';

const initialState = {
  name: 'Jacob'
}

function updateName(name) {
  return {
    type: 'UPDATE_NAME',
    payload: name
  }
}

// this is how our async function delay the dispatch of actions
const asyncUpdateName = (name) => async (dispatch) => {
  dispatch({
    type: 'UPDATE_NAME',
    payload: name
  });
}

function nameReducer(state = initialState, action) {
  switch(action.type) {
    case 'UPDATE_NAME':
      return {
        name: action.payload
      }
    default:
      return state
  }
}

module.exports = {
  updateName,
  asyncUpdateName,
  nameReducer
}
