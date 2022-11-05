import { createSlice } from "@reduxjs/toolkit";

const initialCounterState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    toggle(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

export const { increment, decrement, increase, toggle } = counterSlice.actions;
// counterSlice.actions.toggle() --> returns an action object {type:'auto generated unique identifier'}
// redux-toolkit automatically creates SOME_UNIQUE_IDENTIFIER actions

export default counterSlice.reducer;
