import { configureStore } from "@reduxjs/toolkit";
import { languageReducer } from "./language";
import { menuReducer } from "./menu";

export const store = configureStore({
  reducer: {
    language: languageReducer,
    menu: menuReducer,
  },
});
