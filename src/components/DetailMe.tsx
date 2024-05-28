import { Box } from "@mui/material";
import Who from "./Detail/Who";
import Project from "./Detail/Project";
import Scrollbar from "./Custom/Scroll";
import { useRef, useEffect } from "react";
import gsap from 'gsap'

function DetailMe() {
  const styles = Scrollbar();

  const boxRef = useRef<HTMLDivElement>(null)

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
        }
    });
}, []);

  return (
    <>
      <Box
        sx={{
          height: { xs: "120vh", sm: "40vh", md: "80vh" },
          width: {
            xs: "140vw",
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
          opacity: 0,
          mx: 2,
          ...styles.scrollBox,
        }}
        ref={boxRef}
      >
        <Who />
        <Project />
      </Box>
    </>
  );
}

export default DetailMe;
