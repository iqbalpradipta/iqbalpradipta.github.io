import { Box, Typography } from "@mui/material";

const INK = "#f3ede2";
const ACCENT = "#f5a623";
const WORDMARK = "var(--font-label)";

export default function Logo() {
  return (
    <Box
      sx={{
        position: "relative",
        display: "inline-flex",
        alignItems: "center",
        gap: { xs: 1, sm: 1.4 },
        px: { xs: 0.8, sm: 1.1 },
        py: { xs: 0.5, sm: 0.65 },
      }}
    >
      <Box
        sx={{
          position: "relative",
          zIndex: 1,
          width: { xs: 28, sm: 34 },
          height: { xs: 22, sm: 26 },
        }}
      >
        <svg viewBox="0 0 68 56" width="100%" height="100%">
          <polyline
            points="14,10 14,46"
            fill="none"
            stroke={INK}
            strokeWidth={6}
            strokeLinecap="round"
          />
          <polyline
            points="14,10 28,10"
            fill="none"
            stroke={INK}
            strokeWidth={6}
            strokeLinecap="round"
          />
          <polyline
            points="14,46 28,46"
            fill="none"
            stroke={INK}
            strokeWidth={6}
            strokeLinecap="round"
          />
          <line
            x1={32}
            y1={10}
            x2={42}
            y2={46}
            stroke={ACCENT}
            strokeWidth={6}
            strokeLinecap="round"
          />
          <polyline
            points="48,18 60,28 48,38"
            fill="none"
            stroke={INK}
            strokeWidth={6}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Box>
      <Box
        sx={{
          position: "relative",
          zIndex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: { xs: 0.28, sm: 0.34 },
          lineHeight: 1.05,
        }}
      >
        <Typography
          component="span"
          sx={{
            fontFamily: WORDMARK,
            fontSize: { xs: "0.72rem", sm: "0.85rem" },
            fontWeight: 700,
            letterSpacing: { xs: 3.2, sm: 4.2 },
            textTransform: "uppercase",
            color: INK,
          }}
        >
          Iqbal
        </Typography>
        <Typography
          component="span"
          sx={{
            fontFamily: WORDMARK,
            fontSize: { xs: "0.72rem", sm: "0.85rem" },
            fontWeight: 700,
            letterSpacing: { xs: 3.9, sm: 4.9 },
            textTransform: "uppercase",
            color: ACCENT,
          }}
        >
          Pradipta
        </Typography>
      </Box>
    </Box>
  );
}