import { AppBar, Grid } from "@material-ui/core";
import { styled } from "@material-ui/core/styles";

export const Header = styled(AppBar)({
  backgroundColor: "#fff",
  color: "#333",
});

export const ContentWrapper = styled(Grid)(({ theme }) => ({
  padding: theme.spacing(3),
}));
