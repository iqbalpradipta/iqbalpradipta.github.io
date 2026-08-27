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
  border: "1px solid var(--color-rule)",
  borderRadius: "18px",
  background: "var(--color-paper)",
  px: { xs: 2, sm: 3, md: 3.2 },
  py: { xs: 2.2, sm: 2.8, md: 3.2 },
  color: "var(--color-ink-2)",
  minHeight: "100%",
  boxShadow: "0 10px 22px -18px oklch(20% 0.012 250 / 0.35)",
};

const cardSx = {
  width: "100%",
  height: "100%",
  borderRadius: "20px",
  background: "var(--color-paper)",
  border: "1px solid var(--color-rule)",
  boxShadow: "0 10px 22px -18px oklch(20% 0.012 250 / 0.35)",
  display: "flex",
  flexDirection: "column",
  alignItems: "stretch",
  textAlign: "center",
  gap: { xs: 1.4, md: 1.6 },
  px: { xs: 1.8, md: 2.3 },
  py: { xs: 2.1, md: 2.6 },
  transition: "transform var(--dur-short) var(--ease-out), box-shadow var(--dur-short) var(--ease-out)",
  "&:hover": {
    transform: "translateY(-4px)",
    boxShadow: "var(--shadow-lift)",
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
            fontWeight: 800,
            letterSpacing: "-0.02em",
            color: "var(--color-ink)",
          }}
        >
          My Service
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: "0.94rem", md: "1.05rem" },
            color: "var(--color-ink-3)",
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
                  borderRadius: "14px",
                  border: "1px solid var(--color-rule)",
                }}
              />
              <Stack spacing={0.6} alignItems="center">
                <Typography sx={{ fontWeight: 800, color: "var(--color-ink)", fontSize: { xs: "1rem", md: "1.05rem" }, letterSpacing: "-0.01em" }}>
                  {item.name}
                </Typography>
                <Typography
                  sx={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 0.8,
                    fontFamily: "var(--font-label)",
                    fontSize: "0.68rem",
                    fontWeight: 600,
                    textTransform: "uppercase",
                    letterSpacing: "0.14em",
                    color: "var(--color-ink-3)",
                    "&::before": {
                      content: "\"\"",
                      width: 8,
                      height: 8,
                      borderRadius: "50%",
                      background: item.tier === "Program" ? "var(--color-accent-2)" : "var(--color-lavender)",
                      flexShrink: 0,
                    },
                  }}
                >
                  {item.tier}
                </Typography>
              </Stack>
              <Stack spacing={1} sx={{ flexGrow: 1 }} alignItems="center">
                <Typography sx={{ fontSize: "0.88rem", color: "var(--color-ink-2)", lineHeight: 1.6 }}>
                  {item.description}
                </Typography>
                <Typography sx={{ fontSize: "0.75rem", color: "var(--color-ink-3)", maxWidth: 320 }}>
                  {item.tier === "Program"
                    ? "Includes automation flows, product feed scrapers, and integration-ready modules."
                    : "Fokus pada kebutuhan Anda mulai dari perencanaan, pengembangan, hingga deployment yang terukur."}
                </Typography>
              </Stack>
              <Stack spacing={1.2} alignItems="center" width="100%" sx={{ mt: "auto" }}>
                <Typography sx={{ fontWeight: 800, color: "var(--color-ink)", fontSize: "1rem" }}>{item.price}</Typography>
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
                    background: "var(--color-paper)",
                    border: "1.5px solid var(--color-ink)",
                    color: "var(--color-ink)",
                    fontWeight: 700,
                    transition: "transform var(--dur-short) var(--ease-out), background var(--dur-short) var(--ease-out), box-shadow var(--dur-short) var(--ease-out)",
                    "&:hover": {
                      background: "var(--color-accent)",
                      transform: "translateY(-2px)",
                      boxShadow: "var(--shadow-lift)",
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