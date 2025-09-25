import { Box, Typography } from "@mui/material";

function Who() {
  return (
    <>
      <Box
        sx={{ border: "1px solid #ad8269", borderRadius: "10px", p: "20px" }}
      >
        <Typography sx={{ fontSize: "30px", fontWeight: "bold" }}>
          Who am I ?
        </Typography>
        <Typography>
          Enthusiastic Fullstack Developer with a strong interest in backend
          development using Node.js and practical experience through
          self-initiated and team-based projects. Built and deployed several
          applications, including a scalable social media platform and a
          real-time trivia game using React.js/Next.js. Passionate about
          learning new technologies, writing clean code, and solving real-world
          problems through software. Eager to contribute to a collaborative
          development team and grow as a software engineer.
        </Typography>
      </Box>
    </>
  );
}

export default Who;
