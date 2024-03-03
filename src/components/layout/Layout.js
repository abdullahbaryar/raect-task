import React from "react";
import { Box } from "@mui/system";
import Header from "./component/header/Header";
import Footer from "./component/footer/Footer";

const Layout = ({ children }) => {

  return (
    <Box>
      <Header />
      <Box>{children}</Box>
      <Footer />
    </Box>
  );
};

export default Layout;
