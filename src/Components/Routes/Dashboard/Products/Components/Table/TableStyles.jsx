import { Avatar, TableHead, Tooltip } from "@material-ui/core";
import { styled } from "@material-ui/core/styles";

export const StyledHeader = styled(TableHead)({
  backgroundColor: "#005a8d",
  color: "#fff",

  "& .MuiTableCell-head": {
    color: "#fff",
  },
});

export const StyledTooltip = styled(Tooltip)({
  "& .MuiTooltip-tooltip": {
    backgroundColor: "#fb9300",
  },
});

export const ProductThumbnail = styled(Avatar)({
  width: "60px",
  height: "60px",
  borderRadius: 0,
  margin: "0 auto",
});
