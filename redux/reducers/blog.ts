import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import type { BlogState } from "../../@types/blog";

const initialState: BlogState = {
  blog: [],
};

export const fetchPosts = createAsyncThunk("setMain", async () => {
  const response = await fetch("http://localhost:3000/api/blog");
  const data = await response.json();
  return data;
});

export const blog = createSlice({
  name: "blog",
  initialState,
  reducers: {
    setPosts: (state, action: PayloadAction<BlogState>) => {
      state.blog = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.blog = action.payload;
    });
  },
});

export const { setPosts } = blog.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.headerFooter;

export default blog.reducer;
