import { configureStore } from "@reduxjs/toolkit";
import homeSlice from "./homeSlice";
import quoteSlice from "./p1Slice";
import inputSlice from "./p2InputSlice";
import windowSlice from "./p2WindowSlice";
import soundsSlice from "./p3SoundsSlice";
import kalkulSlice from "./p4KalkSlice";
import clockSlice from "./p5ClockSlice";

export const store = configureStore({
  reducer: {
    home: homeSlice.reducer,
    quote: quoteSlice.reducer,
    input: inputSlice.reducer,
    window: windowSlice.reducer,
    sounds: soundsSlice.reducer,
    kalkul: kalkulSlice.reducer,
    clock: clockSlice.reducer,
  },
});
