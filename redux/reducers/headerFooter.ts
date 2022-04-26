import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import { NavigationLink, FooterSocialLink } from "../../@types/header";

// Define a type for the slice state
interface headerFooterState {
  header: NavigationLink[];
  footer: FooterSocialLink[];
}

// Define the initial state using that type
const initialState: headerFooterState = {
  header: [],
  footer: [],
};

export const headerFooterSlice = createSlice({
  name: "headerFooter",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setHeader: (state, action: PayloadAction<NavigationLink[]>) => {
      state.header = action.payload;
    },
    setFooter: (state, action: PayloadAction<FooterSocialLink[]>) => {
      state.footer = action.payload;
    },
  },
});

export const { setHeader, setFooter } = headerFooterSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.headerFooter;

export default headerFooterSlice.reducer;
