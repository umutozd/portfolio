import React from "react";

import { Box } from "@mui/material";
import { SxProps, Theme, ThemeProvider } from "@mui/material/styles";
import "./App.css";
import { NavigationBar } from "./components/navigationBar";
import { ContactPage } from "./pages/contact/contact";
import { ProfilePage } from "./pages/profile/profile";
import { ProjectsPage } from "./pages/projects/projects";
import { AppContext, AppState } from "./state";
import { darkTheme } from "./theme";

export default function App() {
  const [pageTabIndex, setPageTabIndex] = React.useState(0);
  const appState = {
    pageTabIndex: pageTabIndex,
    setPageTabIndex: setPageTabIndex,
  } as AppState;

  const renderPage = () => {
    switch (appState.pageTabIndex) {
      case 0:
        return <ProfilePage />;

      case 1:
        return <ProjectsPage />;

      case 2:
        return <ContactPage />;

      default:
        appState.setPageTabIndex(0);
        return <ProfilePage />;
    }
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <AppContext.Provider value={appState}>
        <div className="App">
          <NavigationBar />
          <Box sx={styles.root}>{renderPage()}</Box>
        </div>
      </AppContext.Provider>
    </ThemeProvider>
  );
}

type StyleKeys = "root";
const styles: Record<StyleKeys, SxProps<Theme>> = {
  root: {
    backgroundColor: (theme: Theme) => theme.palette.background.default,
    height: "100%",
    color: "#ffffff",
    marginTop: 8.0,
  },
};
