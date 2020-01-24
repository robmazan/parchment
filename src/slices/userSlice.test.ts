import * as userSlice from "./userSlice";
import { expectSaga } from "redux-saga-test-plan";
import * as matchers from "redux-saga-test-plan/matchers";
import { throwError } from "redux-saga-test-plan/providers";

const sampleData: userSlice.User = require("./__mocks__/sampleUser.json");

describe("user slice userSaga", () => {
  it("dispatches success on successful request", async () => {
    const { storeState } = await expectSaga(userSlice.userSaga)
      .provide([
        [
          matchers.call.fn(fetch),
          {
            json() {
              return sampleData;
            }
          }
        ]
      ])
      .put(userSlice.actions.requestUser())
      .put(userSlice.actions.receiveUserSuccess(sampleData))
      .withReducer(userSlice.slice.reducer)
      .run();
    expect(storeState).toMatchInlineSnapshot(`
        Object {
          "loadingState": 2,
          "user": Object {
            "firstname": " Sample ",
            "lastname": " User ",
            "roles": Array [
              "user",
            ],
            "username": "Sample User",
          },
        }
      `);
  });

  it("dispatches failure on error", async () => {
    const error = new Error("Fetch error");
    const { storeState } = await expectSaga(userSlice.userSaga)
      .provide([[matchers.call.fn(fetch), throwError(error)]])
      .put(userSlice.actions.receiveUserFailure(error))
      .withReducer(userSlice.slice.reducer)
      .run();
    expect(storeState).toMatchInlineSnapshot(`
        Object {
          "loadingState": 3,
          "user": null,
        }
      `);
  });
});
