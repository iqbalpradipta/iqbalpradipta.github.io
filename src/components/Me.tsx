import { Box, CardMedia, Grid, Typography } from "@mui/material";
import GithubButton from "./Button/githubButton";
import LinkedInButton from "./Button/linkedInButton";
import EmailButton from "./Button/emailButton";
import WhatsAppButton from "./Button/whatsAppButton";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import DownloadCV from "./Button/downloadCV";

export default function Me() {
  const boxRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.to(boxRef.current, { 
        duration: 2, 
        x: 50, 
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
          height: { xs: "90vh", sm: "40vh", md: "80vh" },
          width: { xs: "90vw", sm: "70vw", md: "50vw", lg: "20vw", xl: "10vw" },
          my: 3,
          display: "flex",
          alignItems: "center",
          gap: 4,
          p: 2,
          border: "1px solid #886150",
          borderRadius: "10px",
          boxShadow: "14px -7px 19px -3px rgba(79,79,79,0.58)",
          backgroundColor: "#6b5449",
          opacity: 0,
          mx: 5
        }}
        ref={boxRef}
      >
        <Grid
          container
          wrap="nowrap"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box sx={{ position: "relative", bottom: "-50px" }}>
            <Grid item>
              <CardMedia
                sx={{
                  height: { xs: "20vh", md: "20vh" },
                  width: { xs: "30vw", md: "10vw" },
                  boxShadow: "14px -7px 19px -3px rgba(79,79,79,0.58)",
                  border: "1px solid #ac7d65",
                  borderRadius: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  position: "absolute",
                  top: "-60px",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                }}
                image="/assets/pp.jpg"
                title="Photo Iqbal Gantenk"
              />
              <Typography
                variant="h6"
                sx={{
                  textAlign: "center",
                  px: { xs: "10px", sm: "15px", md: "25px" },
                }}
              >
                Iqbal Pradipta
              </Typography>
              <Typography
                sx={{
                  textAlign: "center",
                  mx: { xs: "8px", sm: "12px", md: "18px" },
                }}
              >
                Back-end Developer
              </Typography>
            </Grid>
            <Grid item mt="20px">
              <Box sx={{fontWeight: 'bold'}}>Let's Connect With Me !</Box>
              <GithubButton />
              <LinkedInButton />
              <EmailButton />
              <WhatsAppButton />
              <DownloadCV />
            </Grid>
          </Box>
        </Grid>
      </Box>
    </>
  );
}
