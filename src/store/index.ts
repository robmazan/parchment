/* istanbul ignore file */
import { configureStore, Reducer, AnyAction } from "@reduxjs/redux-toolkit";
import postsSlice from "../slices/postsSlice";
import * as router from "./router";
import { RouterState } from "connected-react-router";

const store = configureStore({
  reducer: {
    posts: postsSlice.reducer,
    router: router.reducer as Reducer<RouterState<any>, AnyAction>
  },
  middleware: [router.enhancer]
});

export type AppState = typeof store;
export type AppDispatch = typeof store.dispatch;
export default store;
