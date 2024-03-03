import { Box, CircularProgress } from "@mui/material";
import React from "react";

const root = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: "100vh",
};

const LoadingSpinner = () => {
  return (
    <Box sx={root}>
      <CircularProgress/>
    </Box>
  );
};

export default LoadingSpinner;
