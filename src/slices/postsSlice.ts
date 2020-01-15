import { createSlice, PayloadAction } from "@reduxjs/redux-toolkit";

interface ReceivePostsParam {
  posts: string[];
}

interface PostsState {
  posts: string[];
}

const initialState: PostsState = {
  posts: []
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    receivePosts: (state, action: PayloadAction<ReceivePostsParam>) => {
      state.posts = [...action.payload.posts];
    }
  }
});

export const { receivePosts } = postsSlice.actions;

export default postsSlice;
