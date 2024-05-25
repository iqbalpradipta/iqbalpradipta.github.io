import { Box, Typography } from "@mui/material";
import ProjectCard from "../Project/ProjectCard";

function Project() {
  return (
    <>
      <Box
        sx={{ border: "1px solid #ad8269", borderRadius: "10px", p: "20px", mt: '10px' }}
      >
        <Typography sx={{ fontSize: "30px", fontWeight: "bold" }}>
          Project
        </Typography>
        <ProjectCard />
      </Box>
    </>
  );
}

export default Project;
