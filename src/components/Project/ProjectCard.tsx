import { Box, Button, Typography } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";

export default function ProjectCard() {
  return (
    <Box sx={{ maxWidth: 650, mt: "10px" }}>
      <CardMedia
        component="img"
        alt="Project 1"
        style={{ maxHeight: "60vh", objectFit: "cover" }}
        image="/assets/CircleApps.png"
      />
      <Typography variant="h6">Circle Apps</Typography>
      <Typography variant="body2">
        Building Social media experiences with feature Login, Register, Posts,
        Replies, Follows, and Likes. Developed using Typescript, React.js, and
        PostgreSQL
      </Typography>
      <Button
        variant="contained"
        href='https://github.com/iqbalpradipta/Thread-Apps'
        sx={{
          mt: "9px",
          backgroundColor: "#634136",
          "&:hover": {
            backgroundColor: "#eca898",
            color: "white",
          },
          color: "white"
        }}
      >
        Source Code
      </Button>
    </Box>
  );
}
