/* istanbul ignore file */
import { configureStore, Reducer, AnyAction } from "@reduxjs/redux-toolkit";
import postsSlice from "../slices/postsSlice";
import * as router from "./router";
import { RouterState } from "connected-react-router";
import userSlice from "../slices/userSlice";

const store = configureStore({
  reducer: {
    posts: postsSlice.reducer,
    router: router.reducer as Reducer<RouterState<any>, AnyAction>,
    user: userSlice.reducer
  },
  middleware: [router.enhancer]
});

export type AppState = typeof store;
export type AppDispatch = typeof store.dispatch;
export default store;
