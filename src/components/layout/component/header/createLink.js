import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

export function createLink(label, link, path) {
  return (
    <Link to={link}>
      <Typography
        variant="link"
        sx={{
          
          fontFamily: "Manrope",
        }}
      >
        {label}
      </Typography>
    </Link>
  );
}
