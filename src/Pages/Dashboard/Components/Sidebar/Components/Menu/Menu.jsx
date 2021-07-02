import { useState } from "react";
import {
  AddBox,
  Category,
  ListAlt,
  Storefront,
  ShoppingBasket,
} from "@material-ui/icons";
import { useLocation } from "react-router-dom";

import { Wrapper, SubMenuWrapper, StyledRouteLink } from "./MenuStyles";
import MenuItem from "./MenuItem";
import SubItem from "./SubItem";

function Menu() {
  const { pathname } = useLocation();

  const [current, setCurrent] = useState(pathname);

  const handleChange = (index) => {
    setCurrent(index);
  };

  return (
    <Wrapper component="nav" aria-labelledby="nested-list-subheader">
      <MenuItem
        icon={<Storefront />}
        title="محصولات"
        open={current.includes("products")}
        onChange={(e) => {
          handleChange("/dashboard/products");
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
      <MenuItem
        icon={<Category />}
        title="دسته بندی ها"
        open={current.includes("category")}
        onChange={(e) => {
          handleChange("/dashboard/category");
        }}
      >
        <SubMenuWrapper component="div">
          <StyledRouteLink
            exact
            to="/dashboard/category/create"
            activeClassName="active-item"
          >
            <SubItem title="ایجاد دسته بندی" icon={<AddBox />} />
          </StyledRouteLink>
          <StyledRouteLink
            exact
            to="/dashboard/category"
            activeClassName="active-item"
          >
            <SubItem title="لیست دسته بندی ها" icon={<ListAlt />} />
          </StyledRouteLink>
        </SubMenuWrapper>
      </MenuItem>
      <MenuItem
        icon={<ShoppingBasket />}
        title="سفارشات"
        open={current.includes("orders")}
        onChange={(e) => {
          handleChange("/dashboard/orders");
        }}
      >
        <SubMenuWrapper component="div">
          <StyledRouteLink
            exact
            to="/dashboard/orders"
            activeClassName="active-item"
          >
            <SubItem title="لیست سفارشات" icon={<ListAlt />} />
          </StyledRouteLink>
        </SubMenuWrapper>
      </MenuItem>
    </Wrapper>
  );
}

export default Menu;
