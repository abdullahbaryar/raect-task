import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, CardActionArea } from "@mui/material";
import { Eye, banner } from "../../../../../assets/image";
import palette from "../../../../../theme/palette";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function CardBox({ section }) {
  const navigate = useNavigate();
  const { blogViewCounts } = useSelector((state) => state.blog);
  return (
    <Card
      sx={{
        borderRadius: "0px",
        transition: "transform 0.2s", 
        "&:hover": {
          transform: "scale(1.02)", 
        },
      }}
    >
      <CardActionArea
        onClick={() => navigate(`/detailPage/${section.id}`)}
        sx={{}}
      >
        <CardMedia
          component="img"
          height="180"
          image={banner}
          alt="green iguana"
        />
        <Box sx={{ display: "flex", justifyContent: "space-between", mt: 1 }}>
          <Typography variant="subtitle2">
            Posted on October 6th 2021
          </Typography>
          <Box sx={{ display: "flex", gap: 0.5, alignItems: "center" }}>
            <img src={Eye} alt="Eye" width={20} height={13} />
            <Typography variant="subtitle2">
              {blogViewCounts[section.id] / 2 || 0} views{" "}
            </Typography>
          </Box>
        </Box>
        <Box>
          <Typography
            gutterBottom
            variant="h2"
            sx={{
              color: "#000",
              height: "100%",
              minHeight: "50px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              lineHeight: "normal",
            }}
            component="div"
          >
            {section?.Title}
          </Typography>
          <Typography sx={{ color: palette.grey.dark }}>
            {section?.Subtitle}
          </Typography>
        </Box>
      </CardActionArea>
    </Card>
  );
}
