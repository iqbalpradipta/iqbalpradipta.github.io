import { Box, Typography } from "@mui/material";
import ProjectCard from "../Project/ProjectCard";

const containerSx = {
  border: "1px solid rgba(255,255,255,0.16)",
  borderRadius: "14px",
  background: "rgba(0,0,0,0.18)",
  px: { xs: 2, sm: 2.4 },
  py: { xs: 1.8, sm: 2.2 },
  color: "rgba(255,255,255,0.86)",
  minHeight: "100%",
};

function Project() {
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
        Projects
      </Typography>
      <Typography sx={{ mt: 1.2, mb: 1.6, lineHeight: 1.7 }}>
        A snapshot of recent builds spanning social media, real-time gameplay, and hospitality platforms. Each
        project highlights a different slice of the stack and links to the full source code for deeper exploration.
      </Typography>
      <ProjectCard />
    </Box>
  );
}

export default Project;
