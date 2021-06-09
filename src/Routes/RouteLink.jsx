import { NavLink } from "react-router-dom";

function RouteLink({ to, activeClassName, children }) {
  return (
    <NavLink to={to} activeClassName={activeClassName}>
      {children}
    </NavLink>
  );
}

export default RouteLink;
