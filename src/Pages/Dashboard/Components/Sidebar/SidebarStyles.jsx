import { Box } from "@material-ui/core";
import { styled } from "@material-ui/core/styles";

export const Wrapper = styled(Box)(({ theme, open }) => ({
  backgroundColor: "#005a8d",
  minHeight: "100vh",
  height: "100%",
  color: "#fff",
}));

export const Header = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "64px",
  backgroundColor: "#022e57",
  marginBottom: theme.spacing(2),
}));
