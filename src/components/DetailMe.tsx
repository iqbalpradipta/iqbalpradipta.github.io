import { Box } from "@mui/material";
import Who from "./Detail/Who";
import Project from "./Detail/Project";
import Scrollbar from "./Custom/Scroll";
import { useRef, useEffect } from "react";
import gsap from "gsap";

function DetailMe() {
  const styles = Scrollbar();
  const boxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.to(boxRef.current, {
      duration: 2,
      x: -15,
      opacity: "91%",
      ease: "power2.out",
      scrollTrigger: {
        trigger: boxRef.current,
        start: "top 75%",
        end: "top 50%",
      },
    });
  }, []);

  return (
    <Box
      ref={boxRef}
      sx={{
        width: "100%",
        maxWidth: { xs: "100%", sm: "100%", md: 720, lg: 780, xl: 840 },
        height: { xs: "auto", md: "100%" },
        minHeight: { xs: "auto", sm: "auto", md: "70vh" },
        maxHeight: { xs: "none", sm: "none", md: "82vh" },
        my: { xs: 1, sm: 1.5, md: 2 },
        mx: "auto",
        display: "flex",
        flexDirection: "column",
        gap: { xs: 2.4, md: 3 },
        p: { xs: 2.3, sm: 3.2, md: 4 },
        border: "1px solid #886150",
        borderRadius: "10px",
        boxShadow: "14px -7px 19px -3px rgba(79,79,79,0.58)",
        backgroundColor: "#6b5449",
        opacity: 0,
        ...styles.scrollBox,
      }}
    >
      <Who />
      <Project />
    </Box>
  );
}

export default DetailMe;
