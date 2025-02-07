import React from "react";
import { ThemeProvider, CssBaseline, createTheme } from "@mui/material";
import Search from "./components/Search/Search";

// Create a theme instance
const theme = createTheme({
  palette: {
    primary: {
      main: "#2196f3",
    },
    secondary: {
      main: "#f50057",
    },
    background: {
      default: "#f5f5f5",
    },
  },
  typography: {
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
    ].join(","),
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* Provides consistent baseline styles */}
      <div className="App">
        <header
          style={{
            padding: "2rem",
            textAlign: "center",
            backgroundColor: theme.palette.primary.main,
            color: "#fff",
            marginBottom: "2rem",
          }}
        >
          <h1>Voice123 Search</h1>
        </header>
        <main>
          <Search />
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
