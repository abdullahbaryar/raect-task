import axios from "axios";
import store from "../redux/store";
import { setBlogData } from "../redux/blog/blogSlice";

const Axiosapi = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

// Add a request interceptor to set the Authorization header
Axiosapi.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

Axiosapi.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response && error.response.status === 401) {
     

      // Add any conditioin on 401 status
      store.dispatch(setBlogData([]));
      
    }
    return Promise.reject(error);
  }
);

export default Axiosapi;
