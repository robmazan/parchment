import { call, put } from "redux-saga/effects";
// import slice from "../slices/userSlice";

export const fetchAuthenticatedUserAction = "auth/fetchAuthenticatedUser";

export function* fetchAuthenticateUserSaga() {
  const apiReponse: Response = yield call(fetch, "/api/user");
  // const user: slice.User = yield call([apiReponse, 'json']);
  // yield put(slice.actions.receiveUser(user));
}
