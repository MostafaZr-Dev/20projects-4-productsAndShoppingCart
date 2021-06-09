import { Paper } from "@material-ui/core";
import { styled } from "@material-ui/core/styles";

export const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  paddingTop: theme.spacing(7),
  marginTop: theme.spacing(3),
  position: "relative",

  "& .title": {
    position: "absolute",
    top: theme.spacing(-3),
    left: theme.spacing(3),
    backgroundColor: "#005a8d",
    color: "#fff",
    padding: theme.spacing(2),
    borderRadius: "5px",
  },
}));
