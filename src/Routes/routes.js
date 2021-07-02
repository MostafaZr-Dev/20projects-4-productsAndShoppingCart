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
      {
        path: "/category",
        exact: true,
        component: DashboardComponents.Category,
      },
      {
        path: "/category/create",
        exact: true,
        component: DashboardComponents.CreateCategory,
      },
      {
        path: "/orders",
        exact: true,
        component: DashboardComponents.Orders,
      },
    ],
  },
];

export default routes;
