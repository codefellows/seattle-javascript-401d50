import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import categoryReducer from './categories';
import productReducer from './products';
import { cartReducer } from './cart';

const reducers = {
  categories: categoryReducer,
  products: productReducer,
  cart: cartReducer,
};

export default createStore(combineReducers(reducers), composeWithDevTools());
