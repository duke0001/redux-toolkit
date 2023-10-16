import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "./slise";

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
});