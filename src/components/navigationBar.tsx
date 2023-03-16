import { AppBar, Box, SxProps, Tab, Tabs, Theme, Toolbar } from "@mui/material";
import React from "react";
import { AppContext } from "../state";

interface NavigationBarProps {}

export function NavigationBar(props: NavigationBarProps) {
  const appState = React.useContext(AppContext);

  const onTabChange = (e: React.SyntheticEvent, newIndex: number) => {
    appState.setPageTabIndex(newIndex);
  };

  return (
    <Box>
      <AppBar position="fixed" sx={styles.appbar}>
        <Toolbar sx={styles.toolbar}>
          <Box sx={{ width: "40%" }}>
            <Tabs
              value={appState.pageTabIndex}
              onChange={onTabChange}
              centered
              variant="fullWidth"
              textColor="primary"
              indicatorColor="primary"
            >
              <Tab label="Profile" sx={styles.tab} />
              <Tab label="Projects" sx={styles.tab} />
              <Tab label="Contact" sx={styles.tab} />
            </Tabs>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

type StyleKeys = "appbar" | "toolbar" | "tab";
const styles: Record<StyleKeys, SxProps<Theme>> = {
  appbar: {
    opacity: 0.9,
  },
  toolbar: {
    backgroundColor: "#050505",
    justifyContent: "center",
    alignItems: "center",
  },
  tab: {
    textTransform: "none",
    marginLeft: 3,
    marginRight: 3,
  },
};
