import { createMuiTheme } from "@material-ui/core";

const theme = createMuiTheme({
  palette: {
    primary: {
      // light: "",
      main: "rgb(199, 135, 100)",
      // main: "#ffffff",
      // dark: "",
      // contrastText: "#ffffff",
    },
    secondary: {
      // light: "",
      main: "rgb(79, 33, 95)",
      // dark: "",
      // contrastText: "#ffffff",
    },
  },
  typography: {
    fontFamily: [
      "Montserrat",
      "-apple-system",
      "BlinkMacSystemFont",
      "Segoe UI",
      "Roboto",
      "Oxygen",
      "Ubuntu",
      "Cantarell",
      "Fira Sans",
      "Droid Sans",
      "Helvetica Neue",
      "sans-serif",
    ],
  },
});

export default theme;
