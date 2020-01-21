import * as userSlice from "./userSlice";
import { AnyAction } from "redux";

const sampleData: userSlice.User = require("./__mocks__/sampleUser.json");

describe("user slice", () => {
  describe("receiveUser action", () => {
    it("creates an action to receive user", () => {
      const actionCreator = userSlice.slice.actions.receiveUser;
      expect(actionCreator(sampleData)).toMatchSnapshot();
    });
  });

  describe("combined reducer", () => {
    it("returns the expected default initial state", () => {
      const initialState = userSlice.slice.reducer(undefined, {} as AnyAction);
      expect(initialState).toEqual(null);
    });

    it("handles receiveUser action", () => {
      const reducer = userSlice.slice.reducer;
      const actionCreator = userSlice.slice.actions.receiveUser;
      expect(reducer(undefined, actionCreator(sampleData))).toEqual(sampleData);
    });
  });

  describe("getUserFullName selector", () => {
    it("returns user's fullname", () => {
      const received = userSlice.getUserFullName(sampleData);
      const expected = [sampleData?.firstname, sampleData?.lastname]
        .join(" ")
        .trim();
      expect(received).toEqual(expected);
    });

    it("returns empty string if user is undefined", () => {
      const received = userSlice.getUserFullName(undefined);
      const expected = "";
      expect(received).toEqual(expected);
    });
  });

  describe("getIsLoggedIn selector", () => {
    it("returns false if user is undefined", () => {
      const received = userSlice.getIsLoggedIn(undefined);
      expect(received).toBe(false);
    });

    it("returns true if user is defined", () => {
      const received = userSlice.getIsLoggedIn(sampleData);
      expect(received).toBe(true);
    });
  });
});
