import { createSlice } from "@reduxjs/toolkit";
import { getLanguage } from "../../utils";

const initialLangState = { activeLanguage: "arm" };

const languageSlice = createSlice({
  name: "language",
  initialState: initialLangState,
  reducers: {
    setLanguage: (state, action) => {
      const { payload } = action;
      const language = getLanguage(payload);
      state.activeLanguage = language;
    },
  },
});

export const { setLanguage } = languageSlice.actions;

export const languageReducer = languageSlice.reducer;
