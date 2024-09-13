import { configureStore, createSlice } from "@reduxjs/toolkit";

// ---------------------------------------------------------------------------------------
// initial value for any slice;
const initStateCount = { count: 0, showNumCount: true };

const iniStatAuth = { isAuthenticated: false };

// ---------------------------------------------------------------------------------------

// ---------------------------------------------------------------------------------------
// create any slice for use another event
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

const authSlice = createSlice({
  name: "authPain",
  initialState: iniStatAuth,
  reducers: {
    login: (state) => {
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.isAuthenticated = false;
    },
  },
});

// ---------------------------------------------------------------------------------------

// ---------------------------------------------------------------------------------------
// for use with dispatch
//   countSlice.actions.increment();
export const countActions = countSlice.actions;
export const authActions = authSlice.actions;
// ---------------------------------------------------------------------------------------

// ---------------------------------------------------------------------------------------
// only call one store na ja.
const store = configureStore({
  reducer: {
    //key is match a name of slice
    //ไม่ match ร ะ เ บิ ด
    counterPain: countSlice.reducer, // `reducer` key must be used here
    authPain: authSlice.reducer,
  },
});
// ---------------------------------------------------------------------------------------

export default store;
