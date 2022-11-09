const initialState = {
  show: true,
  total: 1,
  products: [
    {
      category: 'pokemon',
      name: 'gengar',
      description: 'Ghost pokemon',
      price: 90000,
      count: 1,
      image:
        'https://archives.bulbagarden.net/media/upload/thumb/c/c6/094Gengar.png/250px-094Gengar.png',
    },
  ],
};

function addToCart(payload) {
  return {
    type: 'ADD_TO_CART',
    payload,
  };
}

function cartReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        total: state.total + 1,
        products: [...state.products, action.payload]
      }
      // state.products.push(action.payload);
      // ++state.total;
      // console.log(state);
      // return state;
    default:
      return state;
  }
}

module.exports = {
  addToCart,
  cartReducer,
};
