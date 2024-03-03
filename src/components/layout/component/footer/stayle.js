import palette from "../../../../theme/palette";




export const body = ({ path }) => ({
  position: "relative",
  marginTop: path.pathname === "/" ? "5rem" : "2rem",
  background:palette.secondary.light,
  pt:"10px"
});
