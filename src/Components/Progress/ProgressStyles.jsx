import { Box, LinearProgress } from "@material-ui/core";
import { styled } from "@material-ui/core/styles";

export const ProgressWrapper = styled(Box)({
  position: "fixed",
  backgroundColor: "rgb(0 90 141 / 37%)",
  width: "100%",
  height: "100vh",
  top: 0,
  right: 0,
  zIndex: 999,
});

export const StyledProgress = styled(LinearProgress)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  backgroundColor: "#fb9300",

  "&.MuiLinearProgress-colorPrimary": {
    backgroundColor: "rgba(63,81,181,0.49)",
  },

  "& .MuiLinearProgress-barColorPrimary": {
    backgroundColor: "#fb9300",
  },
}));

export const StyledCircularProgressWrapper = styled(Box)({
  position: "relative",
  top: "50%",
  left: "50%",
  transform: "translateY(-50%)",
});
