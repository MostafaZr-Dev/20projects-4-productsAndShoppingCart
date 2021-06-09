import { styled } from "@material-ui/core/styles";
import { Drawer } from "@material-ui/core";

export const DrawerWrapper = styled(Drawer)(({ theme }) => ({
  "& .MuiDrawer-paper": {
    [theme.breakpoints.between("xs", "sm")]: {
      width: "80%",
    },
    [theme.breakpoints.between("sm", "md")]: {
      width: "40%",
    },
  },
}));
