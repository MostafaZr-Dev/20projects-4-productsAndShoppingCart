import { Grid } from "@material-ui/core";

import RTL from "Utils/Theme";
import {AppRoutes} from "Routes";

function App() {
  return (
    <RTL>
      <Grid container>
        <Grid item xs={12} md={12}>
          <AppRoutes />
        </Grid>
      </Grid>
    </RTL>
  );
}

export default App;
