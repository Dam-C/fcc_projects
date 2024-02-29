import { createSlice } from "@reduxjs/toolkit";

const windowSlice = createSlice({
  name: "window",
  initialState: {
    display: true,
  },
  reducers: {
    togglePreview: (state) => {
      state.display = !state.display;
    },
  },
});

export const { togglePreview } = windowSlice.actions;

export default windowSlice;
