import { combineReducers } from "@reduxjs/redux-toolkit";
import postsSlice from "../slices/postsSlice";

const rootReducer = combineReducers({
  posts: postsSlice.reducer
});

export default rootReducer;
