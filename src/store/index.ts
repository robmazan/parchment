/* istanbul ignore file */
import { configureStore, Reducer, AnyAction } from "@reduxjs/redux-toolkit";
import postsSlice from "../slices/postsSlice";
import routerReducer, { routerEnhancer } from "./router";
import { RouterState } from "connected-react-router";

const store = configureStore({
  reducer: {
    posts: postsSlice.reducer,
    router: routerReducer as Reducer<RouterState<any>, AnyAction>
  },
  middleware: [routerEnhancer]
});

export type AppState = typeof store;
export type AppDispatch = typeof store.dispatch;
export default store;
