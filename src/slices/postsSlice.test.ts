import postsSlice, { Post } from "../slices/postsSlice";
import deepFreeze from "deep-freeze";

const sampleData: Post[] = require("./__mocks__/samplePosts.json");

const getInitialState = (): Post[] => {
  return deepFreeze([] as Post[]) as Post[];
};

describe("posts slice", () => {
  describe("receivePosts action", () => {
    it("should create an action to receive posts", () => {
      const actionCreator = postsSlice.actions.receivePosts;
      const expectedAction = {
        type: actionCreator.toString(),
        payload: sampleData
      };
      expect(actionCreator(sampleData)).toEqual(expectedAction);
    });
  });

  describe("combined reducer", () => {
    it("should return the initial state", () => {
      expect(getInitialState()).toEqual([] as Post[]);
    });

    it("should handle receivePosts action", () => {
      const reducer = postsSlice.reducer;
      const actionCreator = postsSlice.actions.receivePosts;
      expect(reducer(getInitialState(), actionCreator(sampleData))).toEqual(
        sampleData
      );
    });
  });
});
