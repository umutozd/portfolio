import React from "react";

import { Box } from "@mui/material";
import { SxProps, Theme, useTheme } from "@mui/material/styles";
import "./App.css";
import { NavigationBar } from "./components/navigationBar";
import { ContactPage } from "./pages/contact/contact";
import { ProfilePage } from "./pages/profile/profile";
import { ProjectsPage } from "./pages/projects/projects";
import { AppContext } from "./state";

export function AppRoot(props: {}) {
  const appState = React.useContext(AppContext);
  const theme = useTheme();

  React.useEffect(() => {
    document
      .getElementsByTagName("body")
      .item(0)!
      .style.setProperty("background-color", theme.palette.background.default);
    console.log(
      `setting background-color to ${theme.palette.background.default}`
    );
    // document.getElementsByTagName("body").item(0)!.style["backgroundColor"] = theme.palette.background.default;
  }, [theme.palette.mode]);

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
    <div className="App">
      <NavigationBar />
      <Box sx={styles.root}>{renderPage()}</Box>
    </div>
  );
}

type StyleKeys = "root";
const styles: Record<StyleKeys, SxProps<Theme>> = {
  root: {
    backgroundColor: (theme: Theme) => theme.palette.background.default,
    height: "100%",
    color: "#ffffff",
    marginTop: 8.0,
    scrollbarColor: "rgb(69, 74, 77)",
  },
};
