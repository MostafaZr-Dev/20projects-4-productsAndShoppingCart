import Dashboard from "Pages/Dashboard";

import * as DashboardComponents from "Components/Routes/Dashboard";

const routes = [
  {
    path: "/dashboard",
    exact: false,
    component: Dashboard,
    routes: [
      {
        path: "/products",
        exact: true,
        component: DashboardComponents.Products,
      },
      {
        path: "/products/create",
        exact: true,
        component: DashboardComponents.CreateProduct,
      },
      {
        path: "/products/:id/edit",
        exact: true,
        component: DashboardComponents.EditProduct,
      },
    ],
  },
];

export default routes;
