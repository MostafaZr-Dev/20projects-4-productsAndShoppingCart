import { FormControl } from "@material-ui/core";
import { styled } from "@material-ui/core/styles";

export const StyledFormControl = styled(FormControl)(({ theme }) => ({
  "& .label": {
    position: "relative",
    transform: "none",
    marginBottom: theme.spacing(2),
  },

  "& .file-btn": {
    backgroundColor: "#005a8d",
    color: "#fff",
    marginBottom: theme.spacing(1),

    "&:hover": {
      backgroundColor: "#fb9300",
    },
  },

  "& .create-btn": {
    backgroundColor: "#fb9300",

    "&:hover": {
      backgroundColor: "rgb(251 147 0 / 69%)",
    },
  },
}));
