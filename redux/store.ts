import {
  Action,
  AnyAction,
  combineReducers,
  configureStore,
  ThunkAction,
} from "@reduxjs/toolkit";
import { createWrapper, Context, HYDRATE } from "next-redux-wrapper";
import headerFooter from "./reducers/headerFooter";
import mainPage from "./reducers/mainPage";
import blog from "./reducers/blog";

const combinedReducer = combineReducers({
  headerFooter,
  mainPage,
  blog,
});

const reducer = (
  state: ReturnType<typeof combinedReducer>,
  action: AnyAction
) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state, // use previous state
      ...action.payload, // apply delta from hydration
    };
    return nextState;
  } else {
    return combinedReducer(state, action);
  }
};

export const makeStore = (context: Context) =>
  configureStore({
    reducer,
  });

type Store = ReturnType<typeof makeStore>;

export type AppDispatch = Store["dispatch"];
export type RootState = ReturnType<Store["getState"]>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export const wrapper = createWrapper(makeStore, {
  debug: true,
});
