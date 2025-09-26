import { Box, Typography } from "@mui/material";

const LIGHT_STROKE = "rgba(255,247,238,0.96)";
const LIGHT_ALT_STROKE = "rgba(255,247,238,0.78)";
const ACCENT_STROKE = "rgba(246,160,121,0.98)";

export default function Logo() {
  return (
    <Box
      sx={{
        display: "inline-flex",
        alignItems: { xs: "center", sm: "flex-end" },
        gap: { xs: 1.1, sm: 1.6 },
        px: { xs: 1.1, sm: 1.6 },
        py: { xs: 0.7, sm: 1 },
        borderRadius: "18px",
        border: "1px solid rgba(255,255,255,0.18)",
        background:
          "linear-gradient(135deg, rgba(41,30,24,0.78) 0%, rgba(103,77,63,0.66) 100%)",
        boxShadow: "0 22px 34px rgba(0,0,0,0.42)",
        backdropFilter: "blur(8px)",
      }}
    >
      <Box sx={{ width: { xs: 40, sm: 54 }, height: { xs: 32, sm: 44 } }}>
        <svg viewBox="0 0 68 56" width="100%" height="100%">
          <polyline
            points="12,10 12,46"
            fill="none"
            stroke={LIGHT_STROKE}
            strokeWidth={6}
            strokeLinecap="round"
          />
          <polyline
            points="12,10 24,10"
            fill="none"
            stroke={LIGHT_ALT_STROKE}
            strokeWidth={6}
            strokeLinecap="round"
          />
          <polyline
            points="12,46 24,46"
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
          display: "flex",
          flexDirection: "column",
          gap: 0.45,
          lineHeight: 0.9,
        }}
      >
        <Typography
          component="span"
          sx={{
            fontFamily: '"Poppins", "Noto Sans", sans-serif',
            fontSize: { xs: "0.92rem", sm: "1.18rem" },
            fontWeight: 700,
            letterSpacing: 4.4,
            textTransform: "uppercase",
            color: "rgba(255,247,238,0.96)",
            textShadow: "0 4px 12px rgba(0,0,0,0.35)",
          }}
        >
          Iqbal
        </Typography>
        <Typography
          component="span"
          sx={{
            fontFamily: '"Poppins", "Noto Sans", sans-serif',
            fontSize: { xs: "0.92rem", sm: "1.18rem" },
            fontWeight: 700,
            letterSpacing: 4.4,
            textTransform: "uppercase",
            color: ACCENT_STROKE,
            textShadow: "0 4px 12px rgba(0,0,0,0.35)",
          }}
        >
          Pradipta
        </Typography>
      </Box>
    </Box>
  );
}
