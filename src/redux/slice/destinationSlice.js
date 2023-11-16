import { createSlice } from "@reduxjs/toolkit";

const initialState = () => {
  return {
    destinations: [
      {
        name: "Hong Kong",
        days: 7,
        fact: "World's longest covered escalator",
      },
      {
        name: "Japan",
        days: 10,
        fact: "Japan is mostly mountains",
      },
      {
        name: "New Zealand",
        days: 14,
        fact: "Last country in the world to be inhabited by humans",
      },
    ],
    destinationSelected: undefined,
  };
};

export const destinationSlice = createSlice({
  name: "destination",
  initialState: initialState,
  reducers: {
    detailDestination: (state, action) => {
      state.destinationSelected = action.payload;
    },
    resetDestination: (state, action) => {
      console.log(action);
      state.destinationSelected = undefined;
    },
  },
});

export const { detailDestination, resetDestination } = destinationSlice.actions;
export const destinationReducer = destinationSlice.reducer;
