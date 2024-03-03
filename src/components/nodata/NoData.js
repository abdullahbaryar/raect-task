import { Box, Typography } from "@mui/material";
import React from "react";
import FolderOffIcon from "@mui/icons-material/FolderOff";

const boxStyle = (props) => {
  return {
    display: "flex",
    height: props.height,
    alignItems: "center",
    justifyContent: "center",
    border: "none",
    flexDirection: "column",
  };
};

const NoData = (props) => {
  return (
    <Box sx={boxStyle(props)}>
      <FolderOffIcon />
      <Typography variant="h2" sx={{color:"#000"}}>
        {props.title ? props.title : "No Record"}
      </Typography>
    </Box>
  );
};

export default NoData;
