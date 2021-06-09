import { List, ListItemIcon, ListItemText } from "@material-ui/core";
import { styled } from "@material-ui/core/styles";
import { NavLink } from "react-router-dom";

export const Wrapper = styled(List)(({ theme }) => ({
  backgroundColor: "transparent",
  color: "#3edbf0",
}));

export const SubMenuWrapper = styled(List)(({ theme }) => ({
  paddingLeft: theme.spacing(7),
  paddingTop: theme.spacing(1),
  color: "inherit",

  [theme.breakpoints.up("sm")]: {
    paddingLeft: theme.spacing(3),
  },
}));

export const StyledListItemIcon = styled(ListItemIcon)(({ theme, open }) => ({
  color: "inherit",

  "&.sub-item": {
    minWidth: "fit-content",
    marginRight: theme.spacing(1.5),
  },

  ...(open
    ? {
        color: "#fff",
      }
    : {}),
}));

export const StyledText = styled(ListItemText)(({ open }) => ({
  ...(open
    ? {
        color: "#fff",
      }
    : {}),
}));

export const StyledRouteLink = styled(NavLink)({
  textDecoration: "none",
  color: "inherit",

  "&.active-item": {
    color: "#fb9300",
  },
});
