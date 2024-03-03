import palette from "../../../../theme/palette";


export const root = ({ path, flag }) => ({
  position: "sticky",
  top: 0,
  zIndex: 99,
  flexGrow: 1,

  "& .MuiAppBar-colorPrimary": {
    backgroundColor: "white",
    pr: "0px !important",
  },
  "& .css-om0efm-MuiButtonBase-root-MuiButton-root:hover ": {
    backgroundColor: "transparent",
  },
  "& .css-1iqcr34-MuiButtonBase-root-MuiMenuItem-root": {
    justifyContent: "center ",
  },
});
export const appBar = ({ path }) => ({
  backgroundColor: "white",
  height: 66,
});
export const headerWrapper = ({ flag }) => ({
  display: { xs: "none", md: "flex" },
  width: "100%",
  justifyContent: "flex-end",
});
export const toolbar = {
  flex: 1,
  justifyContent: "space-between",

  "& .MuiToolbar-root": {
    padding: "0 !important",
    alignItems: "baseline",
  },
  "&.MuiToolbar-root": {
    padding: "0 !important",
  },
};

export const linkContainer = {
  display: { xs: "block", md: "flex" },
  justifyContent: "space-between",
  alignItems: "center",
  gap: "20px",
};

export const ibtn = { cursor: "pointer", display: { xs: "block", md: "none" } };
export const ibtn2 = {
  cursor: "pointer",
  display: { xs: "flex", md: "none" },
  gap: "5px",
  alignItems: "center",
};
export const active = { borderBottom: `2px solid ${palette.common.black}` };
export const appBox = { width: { xs:"97%", md:"94%"}, maxWidth: "1230px", m: "0 auto" };

export const signBtn = {
  width: { xs: "70px", sm: "86px" },
  fontSize: { xs: "10px", sm: "12.6px" },
  fontWeight: 500,
  borderRadius: "36px ",
  p: { xs: "6px 16px" },
};
export const logBtn = {
  width: { xs: "70px", sm: "86px" },
  color: palette.common.black,
  border: `1px solid ${palette.common.black}`,
  fontSize: { xs: "10px", sm: "12.6px" },
  fontWeight: 500,
  borderRadius: "36px ",
  p: { xs: "5px 16px" },
};
