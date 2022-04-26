import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import headerFooterSlice from "./reducers/headerFooter";

export function makeStore(preloadedState: {}) {
  return configureStore({
    reducer: { headerFooter: headerFooterSlice },
    preloadedState,
  });
}

const store = makeStore({});

// https://www.quintessential.gr/blog/development/how-to-integrate-redux-with-next-js-and-ssr
/* let store: {}; */
/* export const initialiseStore = (preloadedState: any) => {
  let _store = store ?? makeStore(preloadedState);

  if (preloadedState && store) {
    _store = makeStore({ ...store.getState(), ...preloadedState });
    store = undefined;
  }

  // For SSG and SSR always create a new store
  if (typeof window === "undefined") return _store;
  // Create the store once in the client
  if (!store) store = _store;

  return _store;
}; */
//

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export default store;
