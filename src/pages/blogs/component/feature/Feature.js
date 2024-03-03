import { Box, Typography } from "@mui/material";
import React from "react";
import { Arrow, Eye, feature } from "../../../../assets/image";
import palette from "../../../../theme/palette";

const Feature = () => {
  return (
    <Box
      sx={{
        display: "flex",
        minHeight: "250px",
        background:"#fff",
        p: "20px",
        
        gap: 2,
        flexDirection:{xs:"column",sm:"row"}
      }}
    >
      <Box sx={{ width: { xs: "100%", sm: "45%",md:"35%" }, height: "250px" }}>
        <img
          src={feature}
          alt="blog"
          style={{ width: "100%", height: "100%" }}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "column",
          height: "100%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap:"wrap"
          }}
        >
          <Box sx={{ display: "flex", gap: 2 }}>
            <Typography variant="subtitle2">
              Posted on October 6th 2021
            </Typography>
            <Box sx={{ display: "flex", gap: 0.5, alignItems: "center" }}>
              <img src={Eye} alt="Eye" width={20} height={13} />
              <Typography variant="subtitle2">263 views </Typography>
            </Box>
          </Box>
          <Box>
            <Typography sx={{ color: "#FF6433" }}>FEATURED</Typography>{" "}
          </Box>
        </Box>
        <Box>
          <Typography
            variant="h2"
            sx={{
              width: { xs: "100%", sm: "90%", md: "70%" },
              color: "#000",
            }}
          >
            Should I Buy a New Car or Lease a New Car in 2021?
          </Typography>
        </Box>
        <Box>
          <Typography sx={{ my: 3,color:palette.grey.dark }}>
            We provide a full range of front end mechanical repairs for all
            makes and models of cars, no matter the cause. This includes, We
            provide a full range of front end mechanical.
          </Typography>
        </Box>
        <Box sx={{ display: "flex", gap: 1, alignItems: "center",mt:1 , cursor:"pointer" }}>
          <Typography>Read more </Typography>
          <img src={Arrow} alt="Arrow" width={30} />
        </Box>
      </Box>
    </Box>
  );
};

export default Feature;
