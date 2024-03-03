import React from "react";
import { Box, TableCell, TableRow, Typography } from "@mui/material";
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

const TableNoData = (props) => {
  return (
    <TableRow {...props} style={{ borderBottom: "none" }}>
      <TableCell colSpan={props.colSpan}>
        <Box sx={boxStyle(props)}>
          <FolderOffIcon />
          <Typography variant="subtitle1">
            {props.title ? props.title : "No KYC request at the moment"}
          </Typography>
        </Box>
      </TableCell>
    </TableRow>
  );
};

TableNoData.defaultProps = {
  height: 10,
  colSpan: 3,
};

export default TableNoData;
