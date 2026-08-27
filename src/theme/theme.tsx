import { createTheme } from "@mui/material";

/* Hallmark - genre: atmospheric/playful - custom theme tuned to Mienar.gif
 * palette: Dark Cozy Night - paper: #16141d - paper2: #201c2b - ink: #f3ede2
 * accents: Amber Gold #f5a623 (primary CTA/active), Soft Violet #7e8ce0 (secondary)
 * layout: Workbench with Segmented Control (Opsi A) capsule tabs
 */

const paper = "#16141d";
const paper2 = "#201c2b";
const ink = "#f3ede2";
const inkMuted = "#9f99ad";
const amber = "#f5a623";
const violet = "#7e8ce0";

const fontBody = "\"Plus Jakarta Sans\", ui-sans-serif, system-ui, sans-serif";

const Theme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: paper,
      paper: paper2,
    },
    text: {
      primary: ink,
      secondary: inkMuted,
      disabled: "#6c667a",
    },
    primary: {
      main: amber,
      contrastText: "#121018",
    },
    secondary: {
      main: violet,
      contrastText: ink,
    },
    divider: "rgba(243, 237, 226, 0.12)",
  },
  typography: {
    fontFamily: fontBody,
    h6: {
      fontWeight: 700,
      letterSpacing: "-0.01em",
    },
    button: {
      textTransform: "none",
      fontWeight: 700,
    },
  },
  shape: {
    borderRadius: 16,
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          borderRadius: 999,
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: "none",
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: `
        :root {
          --color-paper: oklch(18% 0.015 270);
          --color-paper-2: oklch(23% 0.018 270);
          --color-paper-3: oklch(28% 0.02 270);
          --color-ink: oklch(95% 0.01 75);
          --color-ink-2: oklch(82% 0.012 75);
          --color-ink-3: oklch(66% 0.015 270);
          --color-rule: oklch(30% 0.018 270 / 0.6);
          --color-accent: oklch(75% 0.18 75);
          --color-accent-2: oklch(68% 0.15 270);
          --font-display: "Plus Jakarta Sans", ui-sans-serif, system-ui, sans-serif;
          --font-label: "JetBrains Mono", ui-monospace, monospace;
          --ease-out: cubic-bezier(0.16, 1, 0.3, 1);
          --dur-micro: 120ms;
          --dur-short: 220ms;
          --dur-long: 420ms;
          --shadow-soft: 0 24px 48px -12px rgba(0, 0, 0, 0.55);
          --shadow-lift: 0 12px 28px -6px rgba(0, 0, 0, 0.45);
        }
        html, body, #root {
          min-height: 100%;
        }
        @media (min-width: 960px) {
          html, body, #root {
            height: 100vh;
            max-height: 100vh;
            overflow: hidden !important;
          }
        }
        body {
          background-image: url(/assets/Mienar.gif);
          background-attachment: fixed;
          background-size: cover;
          background-repeat: no-repeat;
          background-position: center center;
          min-height: 100vh;
          margin: 0;
          padding: 0;
          overflow-x: hidden;
          overflow-y: auto;
          font-family: var(--font-display);
          color: var(--color-ink);
          -webkit-font-smoothing: antialiased;
          text-rendering: optimizeLegibility;
        }
        ::selection {
          background: var(--color-accent);
          color: #121018;
        }
        :focus-visible {
          outline: 2px solid var(--color-accent);
          outline-offset: 2px;
          border-radius: 6px;
        }
        @media (max-width: 959px) {
          body {
            min-height: auto;
            overflow-y: auto;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          *, *::before, *::after {
            animation-duration: 150ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 150ms !important;
            scroll-behavior: auto !important;
          }
        }
      `,
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
});

export default Theme;