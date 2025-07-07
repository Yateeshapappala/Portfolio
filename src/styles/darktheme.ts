import { createTheme } from "@mui/material/styles";

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#6366f1", // Indigo
      light: "#818cf8",
      dark: "#4f46e5",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#ec4899", // Pink
      light: "#f472b6",
      dark: "#db2777",
      contrastText: "#ffffff",
    },
    background: {
      default: "#0b1120", // darker base for more contrast
      paper: "#1e293b",   // same as before, good for cards/app bar
    },
    text: {
      primary: "#f1f5f9", // lighter text
      secondary: "#94a3b8",
      disabled: "#64748b",
    },
    divider: "#334155", // subtle dividers
    error: {
      main: "#ef4444",
    },
    warning: {
      main: "#fbbf24",
    },
    info: {
      main: "#60a5fa",
    },
    success: {
      main: "#34d399",
    },
  },

  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: { fontWeight: 800, letterSpacing: "-0.025em" },
    h2: { fontWeight: 700, letterSpacing: "-0.025em" },
    h3: { fontWeight: 700, letterSpacing: "-0.025em" },
    h4: { fontWeight: 700 },
    h5: { fontWeight: 600 },
    h6: { fontWeight: 600 },
    button: { fontWeight: 600, textTransform: "none" },
  },

  shape: {
    borderRadius: 12,
  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          padding: "8px 16px",
          boxShadow: "none",
          transition: "all 0.2s ease-in-out",
          "&:hover": {
            backgroundColor: "#4f46e5", // match primary dark for hover
            boxShadow: "0 4px 8px -2px rgba(99, 102, 241, 0.3)",
          },
        },
        contained: {
          "&:hover": {
            boxShadow: "0 6px 12px -3px rgba(99, 102, 241, 0.4)",
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          backgroundColor: "#1e293b", // same as paper
          boxShadow:
            "0 4px 8px -2px rgba(0, 0, 0, 0.5), 0 2px 4px -2px rgba(0, 0, 0, 0.4)",
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "rgba(30, 41, 59, 0.8)", // semi-transparent blur look
          color: "#f1f5f9",
          backdropFilter: "blur(10px)", // subtle frosted effect
          boxShadow: "0 1px 3px 0 rgba(0,0,0,0.4)",
        },
      },
    },
  },
});
