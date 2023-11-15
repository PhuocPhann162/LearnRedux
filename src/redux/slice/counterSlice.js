import { createSlice } from "@reduxjs/toolkit";

const initialState = { count: 10 };

export const counterSlice = createSlice({
  name: "counter",
  initialState: initialState,
  reducers: {
    // here we will define all actions
    increment: (state) => {
      state.count += 1;
    },

    decrement: (state) => {
      state.count -= 1;
    },

    incrementMultiplier: (state, action) => {
      state.count += Number(action.payload);
    },

    decrementMultiplier: (state, action) => {
      state.count -= Number(action.payload);
    },
  },
});

export const { increment, decrement } = counterSlice.actions;
export const { incrementMultiplier, decrementMultiplier } =
  counterSlice.actions;
export const counterReducer = counterSlice.reducer;
