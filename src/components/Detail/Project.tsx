import { Box, Typography } from "@mui/material";
import ProjectCard from "../Project/ProjectCard";

function Project() {
  return (
    <Box sx={{ py: 0.5 }}>
      <Typography
        sx={{
          fontFamily: "var(--font-label)",
          fontSize: "0.68rem",
          fontWeight: 700,
          color: "#f5a623",
          letterSpacing: "0.16em",
          textTransform: "uppercase",
          textAlign: "left",
        }}
      >
        FEATURED BUILDS
      </Typography>
      <Typography sx={{ mt: 1.2, mb: 2.4, lineHeight: 1.7, fontSize: "0.88rem", color: "rgba(243, 237, 226, 0.55)", textAlign: "left" }}>
        A snapshot of recent builds spanning social media, real-time gameplay, and hospitality platforms. Each
        project highlights a different slice of the stack and links to the full source code for deeper exploration.
      </Typography>
      <ProjectCard />
    </Box>
  );
}

export default Project;