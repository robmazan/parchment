import { createSlice, PayloadAction } from "@reduxjs/redux-toolkit";

export interface ReceivePostsParam {
  posts: string[];
}

export interface PostsState {
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

export default postsSlice;
