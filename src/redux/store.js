import { configureStore } from "@reduxjs/toolkit";
// import inputSlice from "./inputSlice";

// import windowsSlice from "./windowsSlice";

import quoteSlice from "./p1Slice";

export const store = configureStore({
  reducer: {
    quote: quoteSlice.reducer,
  },
});
