import { Switch } from "react-router-dom";

import routes from "./routes";
import RouteWithSubRoutes from "./RouteWithSubRoutes";

function AppRoutes() {
  const renderRoutes = routes.map((route, index) => (
    <RouteWithSubRoutes key={index} route={route} />
  ));

  return (
    <Switch>
      {renderRoutes}
    </Switch>
  );
}

export default AppRoutes;
