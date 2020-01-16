import store from "./index";

describe("State", () => {
  it("should contain postsSlice", () => {
    const { posts } = store.getState();
    expect(posts).toEqual([]);
  });
});
