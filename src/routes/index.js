import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import LoadingSpinner from "../components/LoadingSpinner"
import Layout from "../components/layout/Layout";

// Lazy-loaded components
const Blog = lazy(() => import("../pages/blogs/Blog"));
const BlogSingle = lazy(() => import("../pages/blogSingleDetails/BlogSingle"));
const PropertySearch = lazy(() => import("../pages/propertySearch/PropertySearch"));



const renderRoute = (path, component) => (
  <Route path={path} element={<Layout>{component}</Layout>} />
);

const AppRoutes = () => {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Routes>
        {renderRoute("/", <Blog />)}
        {renderRoute("/detailPage/:id", <BlogSingle />)}
        {renderRoute("/property", <PropertySearch />)}
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
