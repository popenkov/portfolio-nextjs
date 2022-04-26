import { configureStore, Action } from "@reduxjs/toolkit";
import headerFooterSlice from "./reducers/headerFooter";
import { ThunkAction } from "redux-thunk";

export const store = configureStore({
  reducer: {
    headerFooter: headerFooterSlice,
    // comments: commentsReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export type AppThunk = ThunkAction<void, RootState, unknown, Action>;
