import { Box, Grid, Stack, Typography } from "@mui/material";

const titleSx = {
  fontFamily: "var(--font-label)",
  fontSize: "0.68rem",
  fontWeight: 700,
  color: "#f5a623",
  letterSpacing: "0.16em",
  textTransform: "uppercase",
  textAlign: "left",
};

const bentoEntries = [
  {
    tag: "ACTIVE FOCUS",
    title: "Fullstack Web Development",
    body: "Developing responsive web applications, frontend user interfaces, and supporting backend RESTful API services using Next.js, React, and TypeScript.",
  },
  {
    tag: "BACKEND LAB",
    title: "Go & Database Tuning",
    body: "Ngulik Go (Golang) concurrency routines, microservice patterns, PostgreSQL query indexing, and forex strategy backtests.",
  },
  {
    tag: "SIDE EXPERIMENTS",
    title: "Real-Time & Web3 Arcade",
    body: "Building real-time charades & trivia games with WebSockets, while exploring digital ownership concepts in Web3.",
  },
  {
    tag: "AVAILABILITY",
    title: "Open for Collaboration",
    body: "Based in Bekasi, ID. Always open to discuss interesting side project ideas, open-source builds, or technical chats.",
  },
];

function Now() {
  return (
    <Box sx={{ py: 0.5 }}>
      {/* Mosaic Header */}
      <Stack direction="row" justifyContent="space-between" alignItems="baseline" flexWrap="wrap" gap={1} sx={{ mb: 2.2 }}>
        <Typography sx={titleSx}>NOW // LOG MOSAIC</Typography>
        <Typography
          sx={{
            fontFamily: "var(--font-label)",
            fontSize: "0.66rem",
            color: "rgba(243, 237, 226, 0.4)",
            letterSpacing: "0.08em",
          }}
        >
          UPDATED AUGUST 2026
        </Typography>
      </Stack>

      {/* Asymmetric Bento Mosaic Grid */}
      <Grid container spacing={2}>
        {bentoEntries.map((item) => (
          <Grid item xs={12} sm={6} key={item.tag}>
            <Box
              sx={{
                p: 2.2,
                borderRadius: "18px",
                background: "rgba(255, 255, 255, 0.02)",
                border: "1px solid rgba(255, 255, 255, 0.06)",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                gap: 0.8,
                transition: "all 0.25s ease",
                "&:hover": {
                  background: "rgba(255, 255, 255, 0.04)",
                  borderColor: "rgba(255, 255, 255, 0.12)",
                  transform: "translateY(-2px)",
                },
              }}
            >
              {/* Card Tag */}
              <Typography
                sx={{
                  fontFamily: "var(--font-label)",
                  fontSize: "0.64rem",
                  fontWeight: 700,
                  color: "#7e8ce0",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  textAlign: "left",
                  mb: 0.2,
                }}
              >
                {item.tag}
              </Typography>

              {/* Card Title & Narrative Body */}
              <Typography
                sx={{
                  fontWeight: 800,
                  fontSize: "1.02rem",
                  color: "#f3ede2",
                  textAlign: "left",
                  lineHeight: 1.3,
                }}
              >
                {item.title}
              </Typography>
              <Typography
                sx={{
                  fontSize: "0.86rem",
                  color: "rgba(243, 237, 226, 0.75)",
                  lineHeight: 1.6,
                  textAlign: "left",
                  mt: 0.4,
                }}
              >
                {item.body}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Now;