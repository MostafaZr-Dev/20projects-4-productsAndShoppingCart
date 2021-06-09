import { Grid, Typography } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import { Wrapper, Header } from "./SidebarStyles";
import Menu from "./Components/Menu";
import SidebarDrawer from "./Components/Drawer";

function Sidebar({ open, closeDrawer }) {
  const theme = useTheme();
  const isSmallDevice = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      {isSmallDevice && (
        <SidebarDrawer open={open} onClose={closeDrawer}>
          <Wrapper>
            <Header>
              <Typography>داشبورد</Typography>
            </Header>
            <Menu />
          </Wrapper>
        </SidebarDrawer>
      )}
      {!isSmallDevice && (
        <Grid item xs={8} sm={8} md={3} lg={2}>
          <Wrapper>
            <Header>
              <Typography>داشبورد</Typography>
            </Header>

            <Menu />
          </Wrapper>
        </Grid>
      )}
    </>
  );
}

export default Sidebar;
