import {
  Collapse,
  ListItem,
} from "@material-ui/core";
import { ExpandLess, ExpandMore } from "@material-ui/icons";

import {StyledListItemIcon, StyledText} from "./MenuStyles";

function MenuItem({ open, onChange, title, children, icon }) {
  return (
    <>
      <ListItem button onClick={onChange}>
        <StyledListItemIcon open={open}>
          {open ? <ExpandLess /> : <ExpandMore />}
          {icon}
        </StyledListItemIcon>
        <StyledText primary={title} open={open} />
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
          {children}
      </Collapse>
    </>
  );
}

export default MenuItem;
