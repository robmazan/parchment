import { all, call } from "redux-saga/effects";
import { userSaga } from "../slices/userSlice";

export function* mainSaga() {
  yield all([call(userSaga)]);
}
