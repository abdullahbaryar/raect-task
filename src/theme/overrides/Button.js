import palette from "../palette";

export default function Button(theme) {
  return {
    MuiButton: {
      styleOverrides: {
        root: {
          "&:hover": {
            boxShadow: "none",
          },
        },
        sizeLarge: {
          height: 48,
        },
        contained: {
          background: palette.secondary.light,
          color: palette.common.white,
          fontSize: "16px",
          fontWeight: 500,
          borderRadius: "12px",
          minWidth: "200px",
          minHeight: "50px",
          "@media (max-width: 600px)": {
            fontSize: "16px",
          },
          "&:hover": {
            backgroundColor: "#F9F9F9",
            color: palette.common.black,
          },
          "@media (max-width:600px)": {
            minWidth: "auto",
          },
          "&.Mui-disabled": {
            color: "#999999",
            opacity: 1,
            background: "#E1E1E1",
            boxShadow: "0px",
          },
        },
      
      },
    },
  };
}
