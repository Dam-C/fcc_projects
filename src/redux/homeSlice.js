import { createSlice } from "@reduxjs/toolkit";

const homeSlice = createSlice({
  name: "home",
  initialState: {
    currPage: "",
  },
  reducers: {
    //modification de la durée de la session
    chgPage: (state, action) => {
      state.currPage = action.payload;
    },
  },
});

export const { incrementBreak } = homeSlice.actions;

export default homeSlice;
