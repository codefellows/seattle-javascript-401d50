import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import peopleReducer from './people.js';

const store = createStore(peopleReducer, composeWithDevTools());

export default store;
