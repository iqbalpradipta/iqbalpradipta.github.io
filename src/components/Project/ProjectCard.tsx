import { Box, Button, CardMedia, Grid, Stack, Typography } from "@mui/material";
import projectData from "../../mocks/project.json";

type ProjectItem = {
  id: string;
  image: string;
  title: string;
  urlMock: string;
  description: string;
  stack: string[];
  source: string;
  website?: string;
};

export default function ProjectCard() {
  const projects = projectData as ProjectItem[];

  return (
    <Stack spacing={4} sx={{ width: "100%", mt: 1 }}>
      {projects.map((item, index) => (
        <Box
          key={item.id || index}
          sx={{
            pb: 3.5,
            borderBottom: index < projects.length - 1 ? "1px solid rgba(255, 255, 255, 0.08)" : "none",
          }}
        >
          <Grid container spacing={{ xs: 2.2, md: 3 }} alignItems="stretch">
            {/* Left: Browser Window Shell */}
            <Grid item xs={12} md={7}>
              <Box
                sx={{
                  borderRadius: "16px",
                  overflow: "hidden",
                  border: "1px solid rgba(255, 255, 255, 0.12)",
                  background: "#16141d",
                  boxShadow: "0 14px 30px -8px rgba(0, 0, 0, 0.65)",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    borderColor: "rgba(245, 166, 35, 0.4)",
                    boxShadow: "0 18px 36px -6px rgba(0, 0, 0, 0.75)",
                    "& .browser-media": {
                      transform: "scale(1.02)",
                    },
                  },
                }}
              >
                {/* Browser Top Bar Controls */}
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    px: 1.8,
                    py: 1,
                    background: "rgba(32, 28, 43, 0.9)",
                    borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
                  }}
                >
                  <Stack direction="row" spacing={0.8} alignItems="center">
                    <Box sx={{ width: 10, height: 10, borderRadius: "50%", background: "#ff5f56" }} />
                    <Box sx={{ width: 10, height: 10, borderRadius: "50%", background: "#ffbd2e" }} />
                    <Box sx={{ width: 10, height: 10, borderRadius: "50%", background: "#27c93f" }} />
                  </Stack>
                  <Typography
                    sx={{
                      fontFamily: "var(--font-label)",
                      fontSize: "0.68rem",
                      color: "rgba(243, 237, 226, 0.45)",
                      letterSpacing: "0.06em",
                    }}
                  >
                    🔒 {item.urlMock}
                  </Typography>
                  <Box sx={{ width: 34 }} />
                </Box>

                {/* Screenshot Image */}
                <Box sx={{ overflow: "hidden", maxHeight: { xs: 240, sm: 280, md: 300 } }}>
                  <CardMedia
                    component="img"
                    alt={item.title}
                    image={item.image}
                    className="browser-media"
                    sx={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      objectPosition: "top center",
                      transition: "transform 0.4s ease",
                    }}
                  />
                </Box>
              </Box>
            </Grid>

            {/* Right: Project Details & Tech Stack */}
            <Grid item xs={12} md={5}>
              <Stack spacing={1.6} justifyContent="space-between" sx={{ height: "100%", py: 0.5 }}>
                <Stack spacing={1} alignItems="flex-start">
                  <Typography
                    sx={{
                      fontFamily: "var(--font-label)",
                      fontSize: "0.66rem",
                      fontWeight: 700,
                      color: "rgba(243, 237, 226, 0.4)",
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                    }}
                  >
                    PROJECT 0{index + 1}
                  </Typography>
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 800,
                      fontSize: { xs: "1.2rem", md: "1.35rem" },
                      letterSpacing: "-0.015em",
                      color: "#f3ede2",
                      textAlign: "left",
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "0.86rem",
                      color: "rgba(243, 237, 226, 0.78)",
                      lineHeight: 1.65,
                      textAlign: "left",
                    }}
                  >
                    {item.description}
                  </Typography>
                </Stack>

                {/* Tech Stack Pills & Action Buttons */}
                <Stack spacing={2} alignItems="flex-start" sx={{ mt: 1 }}>
                  <Stack direction="row" flexWrap="wrap" gap={0.8}>
                    {item.stack &&
                      item.stack.map((tech) => (
                        <Box
                          key={tech}
                          sx={{
                            px: 1.2,
                            py: 0.35,
                            borderRadius: "6px",
                            background: "rgba(255, 255, 255, 0.04)",
                            border: "1px solid rgba(255, 255, 255, 0.08)",
                            fontSize: "0.74rem",
                            fontFamily: "var(--font-label)",
                            color: "#7e8ce0",
                            fontWeight: 600,
                          }}
                        >
                          {tech}
                        </Box>
                      ))}
                  </Stack>

                  <Stack direction="row" spacing={1.2} flexWrap="wrap">
                    {item.website && (
                      <Button
                        variant="contained"
                        href={item.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                          background: "#f5a623",
                          color: "#121018",
                          fontSize: "0.82rem",
                          fontWeight: 700,
                          px: 2,
                          py: 0.75,
                          borderRadius: "10px",
                          boxShadow: "0 4px 14px -2px rgba(245, 166, 35, 0.4)",
                          transition: "all var(--dur-short) var(--ease-out)",
                          "&:hover": {
                            background: "#e09315",
                            transform: "translateY(-2px)",
                            boxShadow: "0 6px 18px -2px rgba(245, 166, 35, 0.55)",
                          },
                        }}
                      >
                        Live Website ↗
                      </Button>
                    )}

                    <Button
                      variant="outlined"
                      href={item.source}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        border: "1px solid rgba(255, 255, 255, 0.14)",
                        color: "#f3ede2",
                        background: "rgba(255, 255, 255, 0.04)",
                        fontSize: "0.82rem",
                        fontWeight: 700,
                        px: 2,
                        py: 0.75,
                        borderRadius: "10px",
                        transition: "all var(--dur-short) var(--ease-out)",
                        "&:hover": {
                          background: "rgba(255, 255, 255, 0.12)",
                          borderColor: "rgba(255, 255, 255, 0.3)",
                          transform: "translateY(-2px)",
                        },
                      }}
                    >
                      Source Code ↗
                    </Button>
                  </Stack>
                </Stack>
              </Stack>
            </Grid>
          </Grid>
        </Box>
      ))}
    </Stack>
  );
}