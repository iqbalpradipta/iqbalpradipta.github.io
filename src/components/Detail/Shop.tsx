import { Box, Button, CardMedia, Grid, Stack, Typography } from "@mui/material";
import shopItems from "../../mocks/shop.json";

type ShopItem = {
  id: string;
  name: string;
  category: string;
  price: string;
  description: string;
  image: string;
  url: string;
};

type ShopItemDisplay = ShopItem & { tier: "Program" | "Service" };

const containerSx = {
  width: "100%",
  maxWidth: "100%",

  border: "1px solid rgba(255,255,255,0.16)",
  borderRadius: "18px",
  background: "linear-gradient(180deg, rgba(50,35,28,0.78) 0%, rgba(36,23,18,0.9) 100%)",
  px: { xs: 2, sm: 3, md: 3.2 },
  py: { xs: 2.2, sm: 2.8, md: 3.2 },
  color: "rgba(255,255,255,0.88)",
  minHeight: "100%",
  boxShadow: "0 28px 42px rgba(0,0,0,0.38)",
};

const cardSx = {
  width: "100%",
  height: "100%",
  borderRadius: "20px",
  background: "rgba(255,255,255,0.08)",
  border: "1px solid rgba(255,255,255,0.12)",
  boxShadow: "0 18px 28px rgba(0,0,0,0.28)",
  display: "flex",
  flexDirection: "column",
  alignItems: "stretch",
  textAlign: "center",
  gap: { xs: 1.4, md: 1.6 },
  px: { xs: 1.8, md: 2.3 },
  py: { xs: 2.1, md: 2.6 },
  transition: "transform 0.25s ease, box-shadow 0.25s ease",
  "&:hover": {
    transform: "translateY(-6px)",
    boxShadow: "0 26px 38px rgba(0,0,0,0.35)",
    background: "rgba(255,255,255,0.12)",
  },
};

function withTier(source: ShopItem[]): ShopItemDisplay[] {
  return source.map((item) => ({
    ...item,
    tier: item.category.toLowerCase().includes("program") ? "Program" : "Service",
  }));
}

function Shop() {
  const items = withTier(shopItems as ShopItem[]);

  return (
    <Box sx={containerSx}>
      <Stack spacing={{ xs: 0.6, md: 0.8 }} alignItems="center" textAlign="center" sx={{ mb: { xs: 2.2, md: 3 } }}>
        <Typography
          sx={{
            fontSize: { xs: "1.6rem", md: "1.9rem", xl: "2.1rem" },
            fontWeight: 700,
            letterSpacing: 1.2,
            textTransform: "uppercase",
            color: "#ffe1d1",
          }}
        >
          My Service
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: "0.94rem", md: "1.05rem" },
            color: "rgba(255,255,255,0.72)",
            maxWidth: { xs: 420, md: 640 },
          }}
        >
          Layanan pengembangan perangkat lunak yang fleksibel untuk mendukung pertumbuhan produk dan bisnis Anda.
        </Typography>
      </Stack>

      <Grid
        container
        spacing={{ xs: 2, md: 2.8, xl: 3.2 }}
        justifyContent="center"
      >
        {items.map((item) => (
          <Grid item xs={12} sm={6} md={4} xl={3} key={item.id} sx={{ display: "flex", justifyContent: "center" }}>
            <Box sx={cardSx}>
              <CardMedia
                component="img"
                image={item.image}
                alt={item.name}
                sx={{
                  width: "100%",
                  aspectRatio: "1 / 1",
                  objectFit: "cover",
                  borderRadius: "16px",
                  border: "1px solid rgba(255,255,255,0.14)",
                }}
              />
              <Stack spacing={0.6} alignItems="center">
                <Typography sx={{ fontWeight: 700, color: "#ffe1d1", fontSize: { xs: "1rem", md: "1.05rem" } }}>
                  {item.name}
                </Typography>
                <Typography
                  sx={{
                    fontSize: "0.72rem",
                    fontWeight: 600,
                    textTransform: "uppercase",
                    letterSpacing: 1.4,
                    color: item.tier === "Program" ? "#89c7ff" : "#f8bfa5",
                  }}
                >
                  {item.tier}
                </Typography>
              </Stack>
              <Stack spacing={1} sx={{ flexGrow: 1 }} alignItems="center">
                <Typography sx={{ fontSize: "0.88rem", color: "rgba(255,255,255,0.8)", lineHeight: 1.6 }}>
                  {item.description}
                </Typography>
                <Typography sx={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.6)", maxWidth: 320 }}>
                  {item.tier === "Program"
                    ? "Includes automation flows, product feed scrapers, and integration-ready modules."
                    : "Fokus pada kebutuhan Anda mulai dari perencanaan, pengembangan, hingga deployment yang terukur."}
                </Typography>
              </Stack>
              <Stack spacing={1.2} alignItems="center" width="100%" sx={{ mt: "auto" }}>
                <Typography sx={{ fontWeight: 700, color: "#fbd1c1", fontSize: "1rem" }}>{item.price}</Typography>
                <Button
                  component="a"
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  size="small"
                  sx={{
                    width: "100%",
                    maxWidth: { xs: 200, md: 220 },
                    px: 0,
                    py: 0.75,
                    borderRadius: "999px",
                    background: "rgba(111,75,58,0.9)",
                    color: "#fff",
                    textTransform: "uppercase",
                    fontWeight: 600,
                    letterSpacing: 0.6,
                    "&:hover": {
                      background: "rgba(156,112,89,0.95)",
                    },
                  }}
                >
                  Lihat Layanan
                </Button>
              </Stack>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Shop;




