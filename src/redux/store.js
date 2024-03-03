import { configureStore } from "@reduxjs/toolkit";

import blogreducer from "./blog/blogSlice";
import propertyReducer from './property/propertySlice';

const store = configureStore({
  reducer: {
    blog: blogreducer,
    properties: propertyReducer,
    
  },
});

export default store;
