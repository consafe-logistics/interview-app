import { ReactElement } from "react";
import RoutesProvider from "./RoutesProvider";
import { createTheme, CssBaseline, StyledEngineProvider, ThemeProvider } from "@mui/material";


const theme = createTheme();

export default function BootstrapApp(): ReactElement {
  return (
    <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <RoutesProvider />
        </ThemeProvider>
    </StyledEngineProvider>
  );
}
