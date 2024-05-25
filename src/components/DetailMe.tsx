import { Box, Typography } from "@mui/material";
import Who from "./Detail/Who";
import Project from "./Detail/Project";
import Scrollbar from "./Custom/Scroll";

function DetailMe() {
  const styles = Scrollbar();

  return (
    <>
      <Box
        sx={{
          height: { xs: "100vh", sm: "40vh", md: "80vh" },
          width: {
            xs: "130vw",
            sm: "100vw",
            md: "80vw",
            lg: "50vw",
            xl: "40vw",
          },
          my: 3,
          gap: 4,
          p: 2,
          border: "1px solid #886150",
          borderRadius: "10px",
          boxShadow: "14px -7px 19px -3px rgba(79,79,79,0.58)",
          backgroundColor: "#6b5449",
          opacity: "91%",
          mx: 3,
          ...styles.scrollBox,
        }}
      >
        <Who />
        <Project />
      </Box>
    </>
  );
}

export default DetailMe;
