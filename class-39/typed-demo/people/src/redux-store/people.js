const initialState = [
  {name: 'Jacob', age: 33},
  {name: 'John', age: 100},
  {name: 'JB', age: 50}
]

export const addPerson = (person) => {
  return {
    type: 'ADD_PERSON',
    payload: person
  }
}

const peopleReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'ADD_PERSON':
      return [...state, action.payload];
    default:
      return state;
  }
}

export default peopleReducer;
