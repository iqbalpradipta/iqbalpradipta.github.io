import { Box, Button, Divider, Stack, Typography } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";

const containerSx = {
  border: "1px solid var(--color-rule)",
  borderRadius: "18px",
  background: "var(--color-paper)",
  px: { xs: 2, sm: 2.4 },
  py: { xs: 1.8, sm: 2.2 },
  color: "var(--color-ink-2)",
  minHeight: "100%",
  boxShadow: "0 10px 22px -18px oklch(20% 0.012 250 / 0.35)",
};

const titleSx = {
  display: "flex",
  alignItems: "center",
  gap: 1.2,
  fontFamily: "var(--font-label)",
  fontSize: "0.72rem",
  fontWeight: 700,
  color: "var(--color-ink)",
  letterSpacing: "0.14em",
  textTransform: "uppercase",
  "&::before": {
    content: "\"\"",
    width: 10,
    height: 10,
    borderRadius: "3px",
    background: "var(--color-accent)",
    flexShrink: 0,
  },
};

const featuredGame = {
  title: "Tetris Arena",
  description:
    "Adaptasi modern dari gim klasik Tetris dengan sentuhan UI retro dan efek partikel ringan. Dibangun sepenuhnya untuk browser sehingga bisa dimainkan di perangkat apa pun dan siap diintegrasikan dengan leaderboard maupun sistem reward digital.",
  image: "/assets/Tetris.png",
  link: "https://tetrisbyiqbal.netlify.app/",
};

function Game() {
  return (
    <Box sx={containerSx}>
      <Typography sx={titleSx}>My Games</Typography>
      <Typography sx={{ mt: 1.2, mb: 1.8, lineHeight: 1.7 }}>
        This library blends Web3 experiments that explore digital ownership with HTML5 arcade builds you can launch instantly in the browser.
      </Typography>

      <Divider sx={{ borderColor: "var(--color-rule)" }} />

      <Box
        sx={{
          mt: 2.2,
          border: "1.5px solid var(--color-ink)",
          borderRadius: "20px",
          p: { xs: 1.8, sm: 2 },
          background: "var(--color-paper-2)",
          boxShadow: "6px 6px 0 oklch(20% 0.012 250 / 0.12)",
        }}
      >
        <Stack direction={{ xs: "column", sm: "row" }} spacing={{ xs: 1.8, sm: 2.4 }}>
          <CardMedia
            component="img"
            image={featuredGame.image}
            alt={featuredGame.title}
            sx={{
              width: { xs: "100%", sm: 240 },
              maxHeight: 220,
              objectFit: "cover",
              borderRadius: "14px",
              border: "1px solid var(--color-rule)",
            }}
          />
          <Stack spacing={1.4} justifyContent="center" sx={{ flex: 1 }}>
            <Typography
              sx={{
                fontFamily: "var(--font-label)",
                fontSize: "0.68rem",
                fontWeight: 700,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "var(--color-ink-3)",
              }}
            >
              Featured Game
            </Typography>
            <Typography sx={{ fontWeight: 800, fontSize: { xs: "1.15rem", sm: "1.3rem" }, letterSpacing: "-0.01em", color: "var(--color-ink)" }}>
              {featuredGame.title}
            </Typography>
            <Typography sx={{ lineHeight: 1.7 }}>{featuredGame.description}</Typography>
            <Button
              component="a"
              href={featuredGame.link}
              target="_blank"
              rel="noopener noreferrer"
              variant="contained"
              sx={{
                alignSelf: { xs: "stretch", sm: "flex-start" },
                mt: 0.5,
                background: "var(--color-accent-3)",
                color: "var(--color-ink)",
                border: "1.5px solid var(--color-ink)",
                fontWeight: 800,
                letterSpacing: 0.4,
                boxShadow: "0 6px 14px -6px oklch(20% 0.012 250 / 0.35)",
                transition: "transform var(--dur-short) var(--ease-out), box-shadow var(--dur-short) var(--ease-out)",
                "&:hover": {
                  background: "var(--color-accent-3)",
                  transform: "translateY(-2px)",
                  boxShadow: "var(--shadow-lift)",
                },
              }}
            >
              Play Now
            </Button>
          </Stack>
        </Stack>
      </Box>

    </Box>
  );
}

export default Game;