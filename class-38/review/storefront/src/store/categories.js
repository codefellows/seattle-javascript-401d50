const initialState = {
  activeCategory: 'pokemon',
  listCategories: [
    {
      normalizedName: 'electronic',
      displayName: 'Electronic',
      description: 'Electronic stuff and things',
    },
    {
      normalizedName: 'food',
      displayName: 'Food',
      description: 'Food things',
    },
    {
      normalizedName: 'pokemon',
      displayName: 'Pokemon',
      description: 'Pokemon, Gota Catch em all',
    },
  ],
};

// action
export const changeActiveCategory = (payload) => {
  return {
    type: 'CHANGE_ACTIVE_CATEGORY',
    payload: payload,
  };
};

//reducer
const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_ACTIVE_CATEGORY':
      state.activeCategory = action.payload;
      return {
        ...state,
      };
    default:
      return { ...state };
  }
};

export default categoryReducer;
