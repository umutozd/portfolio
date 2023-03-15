import { createTheme } from "@mui/material/styles";

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#f44336",
      light: "#e57373",
      dark: "#d32f2f",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#e97b73",
      light: "#e59898",
      dark: "#b34848",
      contrastText: "#ffffff",
    },
    background: {
      default: "rgb(47, 52, 55)",
      paper: "#000000",
    },
  },
});

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#f44336",
      light: "#e57373",
      dark: "#d32f2f",
      contrastText: "#ffffff",
    },
  },
});
