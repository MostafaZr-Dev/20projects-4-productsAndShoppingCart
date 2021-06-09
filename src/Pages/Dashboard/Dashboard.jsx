import Layout from "./Components/Layout";
import { RouteWithSubRoutes } from "Routes";

function Dashboard({ base, routes }) {
  const renderRoutes = routes.map((route, index) => (
    <RouteWithSubRoutes key={`${base}-${index}`} base={base} route={route} />
  ));

  return (
    <Layout>
      {renderRoutes}
    </Layout>
  );
}

export default Dashboard;
