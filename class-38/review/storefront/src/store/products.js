const initialState = {
  displayedProducts: [],
  products: [
    {
      category: 'electronic',
      name: 'toaster',
      description: 'Device to toast bread',
      price: 50,
      count: 10,
      image:
        'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6519/6519437_sd.jpg',
    },
    {
      category: 'electronic',
      name: 'tv',
      description: 'A screen with moving pictures',
      price: 700,
      count: 5,
      image:
        'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6405/6405232ld.jpg',
    },
    {
      category: 'food',
      name: 'pizza',
      description:
        'round baked dough with tomato sauce on top, topped with cheese and pepperoni ',
      price: 3,
      count: 20,
      image:
        'https://images.seattletimes.com/wp-content/uploads/2016/07/934f2002-538d-11e6-9946-4aa3269fcaf1.jpg?d=1200x630',
    },
    {
      category: 'food',
      name: 'bahn mi',
      description: 'Vietnamese sandwich ',
      price: 7,
      count: 45,
      image:
        'https://media2.fdncms.com/stranger/imager/u/large/25030781/pratt_banh-mi_04-web.jpg',
    },
    {
      category: 'pokemon',
      name: 'pikachu',
      description: 'Lightning pokemon',
      price: 50000,
      count: 1,
      image: 'https://assets.puzzlefactory.pl/puzzle/254/191/original.jpg',
    },
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

export const filterProduct = (payload) => {
  return {
    type: 'FILTER_PRODUCT',
    payload: payload,
  };
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FILTER_PRODUCT':
      let newDisplayProducts = state.products.filter(
        (el) => el.category === action.payload
      );
      state.displayedProducts = newDisplayProducts;
      return {
        ...state,
      };
    case "ADD_TO_CART":
      return {
        ...state,
        products: state.products.map(product => {
          if (product.name === action.payload.name) {
            product.count = product.count - 1;
          }

          return product
        })
      }
    default:
      return { ...state };
  }
};

export default productReducer;
