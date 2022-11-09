import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
// import thunk from './middleware/thunk';
import thunk from 'redux-thunk';
import categoriesReducer from './categories.js';

const reducers = combineReducers({
  categories: categoriesReducer
})

const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));

export default store;
