import { createSlice, PayloadAction } from "@reduxjs/redux-toolkit";

export interface Post {
  id: number;
  authorId: number;
  categoryId: number;
  title: string;
  excerpt: string;
  content: string;
}

const postsSlice = createSlice({
  name: "posts",
  initialState: [] as Post[],
  reducers: {
    receivePosts: (state, action: PayloadAction<Post[]>) => {
      return action.payload;
    }
  }
});

export default postsSlice;
