import { configureStore } from "@reduxjs/redux-toolkit";
import rootReducer from "./reducer";

const store = configureStore({
  reducer: rootReducer
});

export type AppState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
export default store;
