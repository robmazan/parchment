import { takeLatest, put } from "redux-saga/effects";
import * as userSaga from "./userSaga";

export function* mainSaga() {
  yield takeLatest(
    userSaga.fetchAuthenticatedUserAction,
    userSaga.fetchAuthenticateUserSaga
  );
  yield put({ type: userSaga.fetchAuthenticatedUserAction });
}
