import { createSlice, PayloadAction } from "@reduxjs/redux-toolkit";
import { call, put } from "redux-saga/effects";

export interface User {
  username: string;
  firstname: string;
  lastname: string;
  roles: string[];
}

export enum LoadingState {
  NONE,
  PENDING,
  SUCCESS,
  FAILURE
}

export type UserState = {
  user: User | null;
  loadingState: LoadingState;
};

export const slice = createSlice({
  name: "user",
  initialState: {
    user: null,
    loadingState: LoadingState.NONE
  },
  reducers: {
    requestUser: (state: UserState): void => {
      state.loadingState = LoadingState.PENDING;
    },
    receiveUserSuccess: (
      state: UserState,
      action: PayloadAction<User>
    ): void => {
      state.loadingState = LoadingState.SUCCESS;
      state.user = action.payload;
    },
    receiveUserFailure: (
      state: UserState,
      action: PayloadAction<Error>
    ): void => {
      state.loadingState = LoadingState.FAILURE;
      state.user = null;
    }
  }
});

export function* userSaga() {
  try {
    yield put(slice.actions.requestUser());
    const response: Response = yield call(fetch, "/api/user");
    const user: User = yield call([response, "json"]);
    yield put(slice.actions.receiveUserSuccess(user));
  } catch (error) {
    yield put(slice.actions.receiveUserFailure(error));
  }
}

export const actions = slice.actions;
export default slice;
