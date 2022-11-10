import { createSlice } from '@reduxjs/toolkit';

const peopleSlice = createSlice({
  name: 'people',
  initialState: [
    { name: 'Jacob', age: 33 },
    { name: 'John', age: 100 },
    { name: 'JB', age: 50 }
  ],
  reducers: {
    add(state, action) {
      console.log(action); // people/add
      state.push(action.payload);
    }
  }
});

export default peopleSlice;
