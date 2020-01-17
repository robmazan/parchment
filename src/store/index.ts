/* istanbul ignore file */
import { configureStore } from "@reduxjs/redux-toolkit";
import postsSlice from "../slices/postsSlice";

const store = configureStore({
  reducer: {
    posts: postsSlice.reducer
  }
});

export type AppState = typeof store;
export type AppDispatch = typeof store.dispatch;
export default store;
