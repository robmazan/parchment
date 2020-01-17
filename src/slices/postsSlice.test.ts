import postsSlice, { Post } from "../slices/postsSlice";
import { AnyAction } from "redux";

const sampleData: Post[] = require("./__mocks__/samplePosts.json");

describe("posts slice", () => {
  describe("receivePosts action", () => {
    it("should create an action to receive posts", () => {
      const actionCreator = postsSlice.actions.receivePosts;
      expect(actionCreator(sampleData)).toMatchSnapshot();
    });
  });

  describe("combined reducer", () => {
    it("should return the expected default initial state", () => {
      const initialState = postsSlice.reducer(undefined, {} as AnyAction);
      expect(initialState).toEqual([] as Post[]);
    });

    it("should handle receivePosts action", () => {
      const reducer = postsSlice.reducer;
      const actionCreator = postsSlice.actions.receivePosts;
      expect(reducer([] as Post[], actionCreator(sampleData))).toEqual(
        sampleData
      );
    });
  });
});
