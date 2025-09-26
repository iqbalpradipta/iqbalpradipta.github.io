import { Box, Button, Divider, Stack, Typography } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";

const containerSx = {
  border: "1px solid rgba(255,255,255,0.16)",
  borderRadius: "14px",
  background: "rgba(0,0,0,0.18)",
  px: { xs: 2, sm: 2.4 },
  py: { xs: 1.8, sm: 2.2 },
  color: "rgba(255,255,255,0.86)",
  minHeight: "100%",
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
      <Typography
        sx={{
          fontSize: { xs: "0.95rem", sm: "1.05rem" },
          fontWeight: 700,
          color: "#ffe1d1",
          letterSpacing: 0.6,
          textTransform: "uppercase",
        }}
      >
        Games
      </Typography>
      <Typography sx={{ mt: 1.2, mb: 1.8, lineHeight: 1.7 }}>
        Koleksi game ini terbagi dalam dua pendekatan: eksperimen Web3 yang menonjolkan kepemilikan digital serta game HTML5 ringan yang siap dimainkan langsung di browser.
      </Typography>

      <Divider sx={{ borderColor: "#ad8269" }} />

      <Box
        sx={{
          mt: 2.2,
          border: "1px solid #ad8269",
          borderRadius: "12px",
          p: { xs: 1.8, sm: 2 },
          background: "rgba(66,43,34,0.65)",
          boxShadow: "0 20px 32px rgba(0,0,0,0.32)",
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
              borderRadius: "10px",
              border: "2px solid rgba(255,255,255,0.18)",
            }}
          />
          <Stack spacing={1.4} justifyContent="center" sx={{ flex: 1 }}>
            <Typography sx={{ fontWeight: 700, fontSize: { xs: "1.05rem", sm: "1.15rem" }, color: "#ffe1d1" }}>
              Featured Game
            </Typography>
            <Typography sx={{ fontWeight: 600, color: "rgba(255,255,255,0.82)" }}>{featuredGame.title}</Typography>
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
                backgroundColor: "#634136",
                color: "#f8f6e3",
                fontWeight: 600,
                letterSpacing: 0.6,
                textTransform: "uppercase",
                '&:hover': {
                  backgroundColor: "#eca898",
                  color: "#fff",
                },
              }}
            >
              Mainkan Sekarang
            </Button>
          </Stack>
        </Stack>
      </Box>

    </Box>
  );
}

export default Game;
