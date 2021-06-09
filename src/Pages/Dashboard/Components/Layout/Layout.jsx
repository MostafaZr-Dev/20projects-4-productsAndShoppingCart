import { useState } from "react";

import { Grid } from "@material-ui/core";

import Sidebar from "../Sidebar";
import Content from "../Content";

function Layout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleDrawer = () => {
    setIsSidebarOpen((prevState) => !prevState);
  };

  const closeDrawer = () => {
    setIsSidebarOpen(false);
  };

  return (
    <Grid container>
      <Sidebar open={isSidebarOpen} closeDrawer={closeDrawer} />
      <Content toggleDrawer={toggleDrawer}>{children}</Content>
    </Grid>
  );
}

export default Layout;
