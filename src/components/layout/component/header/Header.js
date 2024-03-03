import React from "react";
import {
  Box,
  AppBar,
  Toolbar,
  IconButton,
  useScrollTrigger,
} from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import DragHandleIcon from '@mui/icons-material/DragHandle';
import {
  appBar,
  appBox,
  headerWrapper,
  ibtn,
  ibtn2,
  linkContainer,
  root,
  toolbar,
} from "./style";
import { createLink } from "./createLink";
import { Logo } from "../../../../assets/image";

export default function Header() {
  const location = useLocation();
  const path = location.pathname;

  const trigger = useScrollTrigger();

  return (
    <Box sx={root({ path })} className={trigger ? "hidden" : "visible"}>
      <AppBar sx={appBar({ path })} elevation={0}>
        <Box sx={appBox}>
          <Toolbar sx={toolbar}>
            <Link to="/">
              <Box
                sx={{
                  height: { xs: 40, sm: 50 },
                  width: { xs: 50, sm: 70 },
                  "& img": {
                    height: "100%",
                    width: "100%",
                    objectFit: "contain", 
                  },
                }}
              >
                <img src={Logo} alt="logo" />
              </Box>
            </Link>
            <Box sx={headerWrapper({})}>
              <Box sx={linkContainer}>
                {createLink("Home", "/", path)}
                {createLink("About", "/", path)}
                {createLink("Services", "/", path)}
                {createLink("Blok", "/", path)}
                {createLink("Contect", "/", path)}
                {createLink("Property", "/property", path)}
              </Box>
            </Box>
            <Box sx={ibtn2}>
              <IconButton  sx={ibtn}>
                <DragHandleIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </Box>
      </AppBar>
    </Box>
  );
}
