import { Grid, IconButton, Toolbar, Typography } from "@material-ui/core";
import { Menu } from "@material-ui/icons";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import { Header, ContentWrapper } from "./ContentStyles";

function Content({ children, toggleDrawer }) {
  const theme = useTheme();
  const isSmallDevice = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Grid item xs={12} sm={12} md={9} lg={10}>
      <Grid container direction="column">
        <Grid item xs={12} md={12}>
          <Header position="static">
            <Toolbar>
              {isSmallDevice && (
                <IconButton
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  onClick={toggleDrawer}
                >
                  <Menu />
                </IconButton>
              )}
              <Typography variant="h6">داشبورد</Typography>
            </Toolbar>
          </Header>
        </Grid>
        <ContentWrapper item xs={12} md={12}>
          {children}
        </ContentWrapper>
      </Grid>
    </Grid>
  );
}

export default Content;
