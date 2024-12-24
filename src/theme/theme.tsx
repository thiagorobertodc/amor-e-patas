import { createTheme } from "@mui/material";
import { responsiveFontSizes } from "@mui/material/styles";

let theme = createTheme({
  palette: {
    primary: {
      main: "#24483a", // Dark green as primary color
    },
    background: {
      default: "#24483a", // Dark green background
    },
    text: {
      primary: "#ffffff", // White text by default
      secondary: "#d4d4d4", // Light gray text for descriptions
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
          backgroundColor: "#24483a", // Dark green body background
          color: "#ffffff", // White text by default
          overflow: "hidden",
        },
        html: {
          height: "100%",
        },
        a: {
          color: "#f4b93b", // Gold color for links
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: "#f4b93b", // Gold button
          color: "#24483a", // Dark green text on buttons
          "&:hover": {
            backgroundColor: "", // Darker gold on hover
          },
        },
      },
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
