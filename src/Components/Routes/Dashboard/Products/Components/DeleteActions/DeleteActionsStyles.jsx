import { Button } from "@material-ui/core";
import { styled } from "@material-ui/core/styles";

export const StyledButton = styled(Button)({
  "&.delete": {
    backgroundColor: "red",
    color: "#fff",
  },

  "&.cancel": {
    backgroundColor: "blue",
    color: "#fff",
  },
});
