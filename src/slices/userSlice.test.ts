import * as userSlice from "./userSlice";
import { AnyAction } from "redux";
import { testSaga, expectSaga } from "redux-saga-test-plan";
import * as matchers from "redux-saga-test-plan/matchers";
import { throwError } from "redux-saga-test-plan/providers";

const sampleData: userSlice.User = require("./__mocks__/sampleUser.json");

describe("user slice", () => {
  describe("combined reducer", () => {
    it("returns the expected default initial state", () => {
      const reducer = userSlice.slice.reducer;
      const initialState = reducer(undefined, {} as AnyAction);
      expect(initialState).toMatchSnapshot();
    });

    it("handles requestUser action", () => {
      const reducer = userSlice.slice.reducer;
      const actionCreator = userSlice.actions.requestUser;
      expect(reducer(undefined, actionCreator())).toMatchSnapshot();
    });

    it("handles receiveUserSuccess action", () => {
      const reducer = userSlice.slice.reducer;
      const actionCreator = userSlice.actions.receiveUserSuccess;
      expect(reducer(undefined, actionCreator(sampleData))).toMatchSnapshot();
    });

    it("handles receiveUserFailure action", () => {
      const reducer = userSlice.slice.reducer;
      const actionCreator = userSlice.actions.receiveUserFailure;
      const error = new Error("Sample error message");
      expect(reducer(undefined, actionCreator(error))).toMatchSnapshot();
    });
  });

  describe("fetchUser", () => {
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
});
