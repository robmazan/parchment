import { all } from "redux-saga/effects";
import { userSaga } from "../slices/userSlice";

export function* mainSaga() {
  yield all([userSaga()]);
}
