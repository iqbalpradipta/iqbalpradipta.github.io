import { Box, Typography } from "@mui/material";

const CARD_GRADIENT = "linear-gradient(135deg, rgba(46,32,27,0.95) 0%, rgba(109,83,69,0.82) 55%, rgba(162,121,101,0.7) 100%)";
const CARD_BORDER = "rgba(255,255,255,0.24)";
const HIGHLIGHT_GRADIENT = "radial-gradient(circle at 18% 14%, rgba(255,255,255,0.35), rgba(255,255,255,0) 58%)";
const LIGHT_STROKE = "rgba(255,247,238,0.96)";
const LIGHT_ALT_STROKE = "rgba(255,247,238,0.78)";
const ACCENT_STROKE = "rgba(246,160,121,0.98)";
const FONT_STACK = '"Poppins", "Noto Sans", sans-serif';
const TEXT_SHADOW = "0 6px 16px rgba(8,0,0,0.42)";

export default function Logo() {
  return (
    <Box
      sx={{
        position: "relative",
        display: "inline-flex",
        alignItems: "center",
        gap: { xs: 1.3, sm: 1.9 },
        px: { xs: 1.6, sm: 2.2 },
        py: { xs: 1, sm: 1.3 },
        minHeight: { xs: 56, sm: 68 },
        borderRadius: { xs: "20px", sm: "26px" },
        border: `1px solid ${CARD_BORDER}`,
        background: CARD_GRADIENT,
        boxShadow: "0 24px 36px rgba(12,5,2,0.52)",
        backdropFilter: "blur(12px)",
        overflow: "hidden",
        isolation: "isolate",
        "&::before": {
          content: '""',
          position: "absolute",
          inset: 0,
          background: HIGHLIGHT_GRADIENT,
          zIndex: 0,
        },
      }}
    >
      <Box
        sx={{
          position: "relative",
          zIndex: 1,
          width: { xs: 44, sm: 58 },
          height: { xs: 34, sm: 44 },
        }}
      >
        <svg
          viewBox="0 0 68 56"
          width="100%"
          height="100%"
          style={{ filter: "drop-shadow(0 8px 14px rgba(0,0,0,0.38))" }}
        >
          <polyline
            points="14,10 14,46"
            fill="none"
            stroke={LIGHT_STROKE}
            strokeWidth={6}
            strokeLinecap="round"
          />
          <polyline
            points="14,10 28,10"
            fill="none"
            stroke={LIGHT_ALT_STROKE}
            strokeWidth={6}
            strokeLinecap="round"
          />
          <polyline
            points="14,46 28,46"
            fill="none"
            stroke={LIGHT_ALT_STROKE}
            strokeWidth={6}
            strokeLinecap="round"
          />
          <line
            x1={32}
            y1={10}
            x2={42}
            y2={46}
            stroke={ACCENT_STROKE}
            strokeWidth={6}
            strokeLinecap="round"
          />
          <polyline
            points="48,18 60,28 48,38"
            fill="none"
            stroke={LIGHT_STROKE}
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
          gap: { xs: 0.35, sm: 0.45 },
          lineHeight: 1,
        }}
      >
        <Typography
          component="span"
          sx={{
            fontFamily: FONT_STACK,
            fontSize: { xs: "0.88rem", sm: "1.16rem" },
            fontWeight: 700,
            letterSpacing: { xs: 4.2, sm: 6.4 },
            textTransform: "uppercase",
            color: LIGHT_STROKE,
            textShadow: TEXT_SHADOW,
          }}
        >
          Iqbal
        </Typography>
        <Typography
          component="span"
          sx={{
            fontFamily: FONT_STACK,
            fontSize: { xs: "0.88rem", sm: "1.16rem" },
            fontWeight: 700,
            letterSpacing: { xs: 5, sm: 7.2 },
            textTransform: "uppercase",
            color: ACCENT_STROKE,
            textShadow: TEXT_SHADOW,
          }}
        >
          Pradipta
        </Typography>
      </Box>
    </Box>
  );
}