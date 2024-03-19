import { createSlice } from "@reduxjs/toolkit";

const initialMenuState = { isOpen: false };

const menuSlice = createSlice({
  name: "menu",
  initialState: initialMenuState,
  reducers: {
    toggleMenu: (state) => {
      const { isOpen } = state;
      state.isOpen = !isOpen;
    },
    openMenu: (state) => {
      state.isOpen = true;
    },
    closeMenu: (state) => {
      state.isOpen = false;
    },
  },
});

export const { toggleMenu, openMenu, closeMenu } = menuSlice.actions;

export const menuReducer = menuSlice.reducer;
