import {
  setBlogData,
  setLoadingBlogData,
  setSingleBlogData,
} from "../redux/blog/blogSlice";
import store from "../redux/store";
import Axiosapi from "./Axiosapi";

export const getAllBlogData = async (dispatch) => {
  store.dispatch(setLoadingBlogData(true));
  try {
    const response = await Axiosapi.get(`/GetBLogs/`, {});
    store.dispatch(setLoadingBlogData(false));
    store.dispatch(setBlogData(response?.data));

    return response;
  } catch (error) {
    // Handle errors here
    store.dispatch(setLoadingBlogData(false));
    console.error("An error occurred while fetching data:", error);
  }
};
export const getSingleBlogData = async (id) => {
  store.dispatch(setLoadingBlogData(true));
  try {
    const response = await Axiosapi.get(`/GetBLogs/${id}`, {});
    store.dispatch(setSingleBlogData(response?.data));
    store.dispatch(setLoadingBlogData(false));
    return response;
  } catch (error) {
    // Handle errors here
    store.dispatch(setLoadingBlogData(false));
    console.error("An error occurred while fetching data:", error);
  }
};
