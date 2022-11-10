import { configureStore, combineReducers } from '@reduxjs/toolkit';
import peopleSlice from './people';

const reducer = combineReducers({
  people: peopleSlice.reducer
});

const store = configureStore({ reducer });

export default store;
