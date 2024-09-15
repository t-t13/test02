import { createSlice } from "@reduxjs/toolkit";

const initStateCount = { count: 0, showNumCount: true };

const countSlice = createSlice({
  name: "counterPain",
  initialState: initStateCount,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    increase: (state, action) => {
      state.count += action.payload.amount;
    },
    toggleChange: (state) => {
      state.showNumCount = !state.showNumCount;
    },
    //   aheee: (state) => {  console.log(state); },
  },
});

export const { increment, increase, decrement, toggleChange } =
  countSlice.actions;

export default countSlice.reducer;
