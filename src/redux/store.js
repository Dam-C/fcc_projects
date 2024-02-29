import { configureStore } from "@reduxjs/toolkit";
import quoteSlice from "./p1Slice";
import inputSlice from "./p2InputSlice";
import windowSlice from "./p2WindowSlice";
import soundsSlice from "./p3SoundsSlice";
import kalkulSlice from "./p4KalkSlice";

export const store = configureStore({
  reducer: {
    quote: quoteSlice.reducer,
    input: inputSlice.reducer,
    window: windowSlice.reducer,
    sounds: soundsSlice.reducer,
    kalkul: kalkulSlice.reducer,
  },
});
