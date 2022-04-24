import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';
import { NavigationLink, FooterSocialLink } from '../../@types/header';

// Define a type for the slice state
interface CounterState {
  header: NavigationLink[];
  footer: FooterSocialLink[];
}

// Define the initial state using that type
const initialState: CounterState = {
  header: [],
  footer: [],
};

export const counterSlice = createSlice({
  name: 'headerFooter',
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

export const { setHeader, setFooter } = counterSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.headerFooter;

export default counterSlice.reducer;
