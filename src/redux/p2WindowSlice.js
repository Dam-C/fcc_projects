import { createSlice } from "@reduxjs/toolkit";

const windowSlice = createSlice({
  name: "window",
  initialState: {
    input: true,
    preview: true,
  },
  reducers: {
    toggleInput: (state) => {
      state.input = !state.input;
    },
    togglePreview: (state) => {
      state.preview = !state.preview;
    },
  },
});

export const { toggleInput, togglePreview } = windowSlice.actions;

export default windowSlice;
