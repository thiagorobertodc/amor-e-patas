import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "normalize.css";
import "@fontsource/nunito/300.css";
import "@fontsource/nunito/400.css";
import "@fontsource/nunito/500.css";
import "@fontsource/nunito/700.css";
import App from "./App";
import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "./theme/index";

const container = document.getElementById("root") as HTMLElement;

const root = createRoot(container);

root.render(
  <StrictMode>
    <ThemeProvider theme={theme.theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </StrictMode>
);
