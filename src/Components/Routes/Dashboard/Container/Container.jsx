import { Typography } from "@material-ui/core";

import { StyledPaper } from "./ContainerStyles";

function Container({ title, children }) {
  return (
    <StyledPaper>
      <Typography className="title">{title}</Typography>
      {children}
    </StyledPaper>
  );
}

export default Container;
