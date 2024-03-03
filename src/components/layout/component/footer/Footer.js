import React from "react";
import { Grid, Typography, Box } from "@mui/material";
import { useLocation } from "react-router-dom";
import { body } from "./stayle";
import { Social } from "../../../../assets/image";

const sections = [
  {
    titlelight: "Help line Number",
    title: "1800 265 24 52",
  },
  {
    titlelight: "Address",
    title: "NH 234   Public Square San Francisco  65368",
  },
  {
    titlelight: "We are open",
    title: "Monday to Friday 9:00 AM to  10:00  AM",
  },
];

const Footer = () => {
  const path = useLocation();

  return (
    <Box sx={body({ path })}>
      <Box sx={{ width: "90%", maxWidth: "1230px", m: "3rem auto" }}>
        <Grid container>
          <Grid item xs={6} sm={6}>
            <Box>
              <Typography variant="h2" sx={{ width: "50%" }}>
                Get in touch with us for your service
              </Typography>
              <Box my={5}>
                <img src={Social} alt="social" />
              </Box>
            </Box>
          </Grid>
          <Grid item xs={6} sm={6}>
            {sections.map((section, index) => (
              <Box key={index} mb={2}>
                <Typography variant="subtitle2">
                  {section.titlelight}
                </Typography>
                <Typography variant="h3">{section.title}</Typography>
              </Box>
            ))}
          </Grid>
        </Grid>
        <Box my={5}>
          <Typography variant="subtitle2">
            @ Copyright Finsweet {new Date().getFullYear()}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
