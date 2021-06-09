import { Route } from "react-router-dom";

function RouteWithSubRoutes({ base, route }) {
  if (base) {
    const path = `${base}${route.path}`;
    return (
      <Route exact={route.exact} path={path}>
        <route.component base={path} routes={route.routes} />
      </Route>
    );
  }

  return (
    <Route exact={route.exact} path={route.path}>
      <route.component base={route.path} routes={route.routes} />
    </Route>
  );
}

export default RouteWithSubRoutes;
