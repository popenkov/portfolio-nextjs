import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import type { MainState } from "../../@types/main";

const initialState: MainState = {
  mainPage: {
    title: "",
    title2: "",
    name: "",
    subtitle: "",
    img: {
      src: "",
      alt: "",
      width: "",
      height: "",
    },
  },
};

export const fetchMain = createAsyncThunk("setMain", async () => {
  const response = await fetch("http://localhost:3000/api/main");
  const data = await response.json();
  return data;
});

export const mainPage = createSlice({
  name: "mainPage",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setMain: (state, action: PayloadAction<MainState>) => {
      state.mainPage = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchMain.fulfilled, (state, action) => {
      state.mainPage = action.payload;
    });
  },
});

export const { setMain } = mainPage.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.headerFooter;

export default mainPage.reducer;
