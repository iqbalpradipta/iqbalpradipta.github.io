import { Box, Typography } from "@mui/material";

const PRIMARY_TEXT = "#fef5e7";
const SECONDARY_TEXT = "#ffb694";
const ICON_PRIMARY = "#fef5e7";
const ICON_ACCENT = "#ffb694";
const FONT_STACK = '"Poppins", "Noto Sans", sans-serif';
const TEXT_SHADOW = "0 4px 10px rgba(8,0,0,0.35)";
const ICON_GLOW = "drop-shadow(0 10px 16px rgba(8,0,0,0.3))";

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
          width: { xs: 28, sm: 36 },
          height: { xs: 22, sm: 28 },
          filter: ICON_GLOW,
        }}
      >
        <svg viewBox="0 0 68 56" width="100%" height="100%">
          <polyline
            points="14,10 14,46"
            fill="none"
            stroke={ICON_PRIMARY}
            strokeWidth={6}
            strokeLinecap="round"
          />
          <polyline
            points="14,10 28,10"
            fill="none"
            stroke={ICON_PRIMARY}
            strokeWidth={6}
            strokeLinecap="round"
          />
          <polyline
            points="14,46 28,46"
            fill="none"
            stroke={ICON_PRIMARY}
            strokeWidth={6}
            strokeLinecap="round"
          />
          <line
            x1={32}
            y1={10}
            x2={42}
            y2={46}
            stroke={ICON_ACCENT}
            strokeWidth={6}
            strokeLinecap="round"
          />
          <polyline
            points="48,18 60,28 48,38"
            fill="none"
            stroke={ICON_PRIMARY}
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
            fontFamily: FONT_STACK,
            fontSize: { xs: "0.78rem", sm: "0.95rem" },
            fontWeight: 800,
            letterSpacing: { xs: 4.2, sm: 5.4 },
            textTransform: "uppercase",
            color: PRIMARY_TEXT,
            textShadow: TEXT_SHADOW,
          }}
        >
          Iqbal
        </Typography>
        <Typography
          component="span"
          sx={{
            fontFamily: FONT_STACK,
            fontSize: { xs: "0.78rem", sm: "0.95rem" },
            fontWeight: 800,
            letterSpacing: { xs: 5.4, sm: 6.6 },
            textTransform: "uppercase",
            color: SECONDARY_TEXT,
            textShadow: TEXT_SHADOW,
          }}
        >
          Pradipta
        </Typography>
      </Box>
    </Box>
  );
}