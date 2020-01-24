import { expectSaga } from "redux-saga-test-plan";
import { mainSaga } from "./index";
import { userSaga } from "../slices/userSlice";

describe("mainSaga", () => {
  it("runs userSaga", () => {
    return expectSaga(mainSaga)
      .call(userSaga)
      .run();
  });
});
