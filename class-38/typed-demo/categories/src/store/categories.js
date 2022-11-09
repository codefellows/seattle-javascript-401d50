const initialState = {
  data: [],
  activeCategory: null
}

export const getCategories = () => async (dispatch) => {
  let response = await fetch('https://api-js401.herokuapp.com/api/v1/categories');
  let data = await response.json();
  dispatch(setCategories(data.results));
}

export const setCategories = (categories) => {
  return {
    type: 'SET_CATEGORIES',
    payload: categories,
  }
}

function categoriesReducer(state = initialState, action) {
  switch(action.type) {
    case 'SET_CATEGORIES':
      return {
        ...state,
        data: action.payload,
      }
    default:
      return state;
  }
}

export default categoriesReducer;
