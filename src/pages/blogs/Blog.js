import React from "react";
import Banner from "./component/banner/Banner";
import Feature from "./component/feature/Feature";
import { Box } from "@mui/material";
import Services from "./component/services/Services";

const Blog = () => {
  return (
    <>
      <Banner />
      <Box sx={{ background: "#F5F5F5", width: "100%", p: "4rem 0" }}>
        <Box
          sx={{
            width: { xs: "97%", md: "94%" },
            maxWidth: "1200px",
            m: "0 auto",
          }}
        >
          <Feature />
        </Box>
      </Box>
      <Box
        sx={{
          width: { xs: "97%", md: "94%" },
          maxWidth: "1200px",
          m: "0 auto",
        }}
      >
        <Services />
      </Box>
    </>
  );
};

export default Blog;
