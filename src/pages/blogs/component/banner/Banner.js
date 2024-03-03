import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import palette from "../../../../theme/palette";
import { banner } from "../../../../assets/image";

const root = {
  width: "100%",
  margin: "50px auto 0",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center center",
  backgroundColor: palette.secondary.light,
  pt: "20px",
};



const Banner = () => {
  return (
    <Box sx={root}>
      <Grid
        container
        spacing={1}
        justifyContent="centre"
        alignItems="center"
        sx={{ pt: 0 }}
      >
        <Grid
          item
          xs={12}
          sm={6}
          sx={{
            backgroundImage: `url(${banner})`,
            backgroundSize: "cover",
            backgroundPosition: "left",
            width: "100%",
            height: { xs: "200px", sm: "400px" },
            opacity: "30%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box>
            <Typography variant="h1" sx={{ color: "#fff" }}>
              our blog
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Box sx={{ p: "20px" }}>
            <Typography
              variant="h2"
              sx={{ width: { xs: "100%", sm: "90%", md: "70%" } }}
            >
              Diagnose Car Problems If You Don’t Know Much About Cars
            </Typography>

            <Typography
              variant="subtitle1"
              sx={{
                width: {
                  xs: "100%",
                  sm: "90%",
                  md: "80%",
                  color: "#fff",
                },
                my: 2,
              }}
            >
              We provide a full range of front end mechanical repairs for all
              makes and models of cars, no matter the cause. This includes, We
              provide a full range of front end mechanical.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Banner;
