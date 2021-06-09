import { useState } from "react";
import { AddBox, ListAlt, Storefront } from "@material-ui/icons";

import { Wrapper, SubMenuWrapper, StyledRouteLink } from "./MenuStyles";
import MenuItem from "./MenuItem";
import SubItem from "./SubItem";

function Menu() {
  const [current, setCurrent] = useState(0);

  const handleChange = (index) => {
    setCurrent(index);
  };

  return (
    <Wrapper component="nav" aria-labelledby="nested-list-subheader">
      <MenuItem
        icon={<Storefront />}
        title="محصولات"
        open={current === 0}
        onChange={(e) => {
          handleChange(0);
        }}
      >
        <SubMenuWrapper component="div">
          <StyledRouteLink
            exact
            to="/dashboard/products/create"
            activeClassName="active-item"
          >
            <SubItem title="محصول جدید" icon={<AddBox />} />
          </StyledRouteLink>
          <StyledRouteLink
            exact
            to="/dashboard/products"
            activeClassName="active-item"
          >
            <SubItem title="لیست محصولات" icon={<ListAlt />} />
          </StyledRouteLink>
        </SubMenuWrapper>
      </MenuItem>
    </Wrapper>
  );
}

export default Menu;
