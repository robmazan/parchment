/* istanbul ignore file */
import { configureStore, Reducer, AnyAction } from "@reduxjs/redux-toolkit";
import postsSlice from "../slices/postsSlice";
import * as router from "./router";
import { RouterState } from "connected-react-router";
import userSlice from "../slices/userSlice";
import createSagaMiddleware from "redux-saga";
import { mainSaga } from "../sagas";

const sagaEnhancer = createSagaMiddleware();

const store = configureStore({
  reducer: {
    posts: postsSlice.reducer,
    router: router.reducer as Reducer<RouterState<any>, AnyAction>,
    user: userSlice.reducer
  },
  middleware: [sagaEnhancer, router.enhancer]
});

sagaEnhancer.run(mainSaga);

export type AppState = typeof store;
export type AppDispatch = typeof store.dispatch;
export default store;
