import { createTheme } from "@mui/material";
import { responsiveFontSizes } from "@mui/material/styles";

let theme = createTheme({
  palette: {
    primary: {
      main: "#24483a",
    },
    background: {
      default: "#f4b93b",
    },
  },
  typography: {
    fontFamily: "'Nunito', sans-serif",
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          margin: 0,
          padding: 0,
          height: "100%",
          backgroundColor: "#f4b93b",
          overflow: "hidden",
        },
        html: {
          height: "100%",
        },
      },
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
