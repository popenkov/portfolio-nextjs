import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
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

export const fetchHeader = createAsyncThunk("setHeader", async () => {
  const response = await fetch("http://localhost:3000/api/header");
  const data = await response.json();
  return data;
});
export const fetchFooter = createAsyncThunk("setFooter", async () => {
  const response = await fetch("http://localhost:3000/api/footer");
  const data = await response.json();
  return data;
});

export const headerFooter = createSlice({
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
  extraReducers: (builder) => {
    builder.addCase(fetchHeader.fulfilled, (state, action) => {
      state.header = action.payload;
    });
    builder.addCase(fetchFooter.fulfilled, (state, action) => {
      state.footer = action.payload;
    });
  },
});

export const { setHeader, setFooter } = headerFooter.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.headerFooter;

export default headerFooter.reducer;
