import { ListItem, ListItemText } from "@material-ui/core";

import {StyledListItemIcon} from "./MenuStyles";


function SubItem({ title, icon }) {
  return (
    <ListItem button onClick={() => {}}>
      <StyledListItemIcon className="sub-item">{icon}</StyledListItemIcon>
      <ListItemText primary={title} />
    </ListItem>
  );
}

export default SubItem;
