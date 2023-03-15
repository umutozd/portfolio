import React from "react";

import { ThemeProvider } from "@mui/material/styles";
import "./App.css";
import { AppRoot } from "./AppRoot";
import { AppContext, AppState } from "./state";
import { darkTheme } from "./theme";

export default function App() {
  const [pageTabIndex, setPageTabIndex] = React.useState(0);
  const appState = {
    pageTabIndex: pageTabIndex,
    setPageTabIndex: setPageTabIndex,
  } as AppState;

  return (
    <ThemeProvider theme={darkTheme}>
      <AppContext.Provider value={appState}>
        <AppRoot />
      </AppContext.Provider>
    </ThemeProvider>
  );
}
