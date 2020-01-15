import postsSlice, {
  ReceivePostsParam,
  PostsState
} from "../slices/postsSlice";
import { AnyAction } from "redux";

const createSamplePosts = (): string[] => {
  return ["Post 1", "Post 2", "Post 3"];
};

const getInitialState = (): PostsState => {
  return postsSlice.reducer(undefined, {} as AnyAction);
};

describe("posts slice", () => {
  describe("receivePosts action", () => {
    it("should create an action to receive posts", () => {
      const actionCreator = postsSlice.actions.receivePosts;
      const samplePosts = createSamplePosts();
      const sampleParams: ReceivePostsParam = {
        posts: samplePosts
      };
      const expectedAction = {
        type: actionCreator.toString(),
        payload: { posts: samplePosts }
      };
      expect(actionCreator(sampleParams)).toEqual(expectedAction);
    });
  });

  describe("combined reducer", () => {
    it("should return the initial state", () => {
      const expectedState: PostsState = {
        posts: []
      };
      expect(getInitialState()).toEqual(expectedState);
    });

    it("should handle receivePosts action", () => {
      const reducer = postsSlice.reducer;
      const actionCreator = postsSlice.actions.receivePosts;
      const initialState = getInitialState();
      const samplePosts = createSamplePosts();
      const sampleParams: ReceivePostsParam = {
        posts: samplePosts
      };
      const expectedState: PostsState = {
        ...initialState,
        posts: samplePosts
      };
      expect(reducer(initialState, actionCreator(sampleParams))).toEqual(
        expectedState
      );
    });
  });
});
