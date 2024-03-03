import { createSlice } from "@reduxjs/toolkit";

const blogSlice = createSlice({
  name: "data",
  initialState: {
    blogData: [],
    singleBlogData: null,
    loadingBlogData: false,
    blogViewCounts: {},
  },
  reducers: {
    setBlogData(state, action) {
      state.blogData = action.payload;
    },
    setLoadingBlogData(state, action) {
      state.loadingBlogData = action.payload;
    },
    setSingleBlogData(state, action) {
      state.singleBlogData = action.payload;
    },
    incrementViewCount(state, action) {
      const { blogId } = action.payload;
      state.blogViewCounts[blogId] = (state.blogViewCounts[blogId] || 0) + 1;
    },
  },
});
export const {
  setBlogData,
  setLoadingBlogData,
  setSingleBlogData,
  incrementViewCount,
} = blogSlice.actions;
export default blogSlice.reducer;
