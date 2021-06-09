import {
  createMuiTheme,
  ThemeProvider,
  StylesProvider,
  jssPreset,
} from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import { create } from "jss";
import rtl from "jss-rtl";

import OpenSans from "Assets/Fonts/OpenSans-Regular.ttf";
import VazirWoff from "Assets/Fonts/Vazir.woff";

const OpenSansFont = {
  fontFamily: "open-sans",
  fontStyle: "normal",
  fontWeight: 400,
  src: `
        local('open-sans'),
        url(${OpenSans}) format('truetype')
      `,
};

const VzirFont = {
  fontFamily: "vazir",
  fontStyle: "normal",
  fontWeight: 400,
  src: `
        local('vazir'),
        url(${VazirWoff}) format('truetype')
      `,
};

const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

const theme = createMuiTheme({
  direction: "rtl",

  typography: {
    fontFamily: "vazir,open-sans, Arial",
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        "@font-face": [OpenSansFont, VzirFont],
      },
    },
  },
});

const RTL = ({ children }) => {
  return (
    <StylesProvider jss={jss}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </StylesProvider>
  );
};

export default RTL;
