import { Box, CardMedia, Divider, Stack, Typography } from "@mui/material";
import GithubButton from "./Button/githubButton";
import LinkedInButton from "./Button/linkedInButton";
import EmailButton from "./Button/emailButton";
import WhatsAppButton from "./Button/whatsAppButton";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import DownloadCV from "./Button/downloadCV";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Me() {
  const boxRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!boxRef.current) {
      return undefined;
    }

    const ctx = gsap.context(() => {
      gsap.set(boxRef.current, { autoAlpha: 0, y: 46, scale: 0.94, filter: "blur(10px)" });
      gsap.set(".profile-avatar", { autoAlpha: 0, y: -28, scale: 0.8 });
      gsap.set(".profile-info", { autoAlpha: 0, y: 14 });
      gsap.set(".profile-divider", { autoAlpha: 0, width: 0 });
      gsap.set(".profile-actions > *", { autoAlpha: 0, y: 18 });

      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
        scrollTrigger: {
          trigger: boxRef.current,
          start: "top 82%",
          once: true,
        },
      });

      tl.to(boxRef.current, {
        autoAlpha: 1,
        y: 0,
        scale: 1,
        filter: "blur(0px)",
        duration: 0.8,
      })
        .to(
          ".profile-avatar",
          { autoAlpha: 1, y: 0, scale: 1, duration: 0.55 },
          "-=0.45"
        )
        .to(
          ".profile-info",
          { autoAlpha: 1, y: 0, duration: 0.45 },
          "-=0.3"
        )
        .to(
          ".profile-divider",
          { width: "100%", autoAlpha: 1, duration: 0.4 },
          "-=0.25"
        )
        .to(
          ".profile-actions > *",
          { autoAlpha: 1, y: 0, duration: 0.4, stagger: 0.1 },
          "-=0.2"
        );
    }, boxRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <Box
        ref={boxRef}
        sx={{
          width: "100%",
          height: { xs: "auto", md: "100%" },
          minHeight: { xs: "auto", sm: "auto", md: "70vh" },
          maxHeight: { xs: "none", sm: "none", md: "82vh" },
          flexGrow: { xs: 0, md: 1 },
          maxWidth: { xs: "100%", sm: "100%", md: 380 },
          mx: "auto",
          mt: { xs: 0.75, md: 1.6 },
          mb: { xs: 0, md: 0 },
          px: { xs: 2, sm: 3, md: 4 },
          pt: { xs: 7, sm: 9, md: 13 },
          pb: { xs: 3.5, sm: 4.5, md: 5.5 },
          borderRadius: "18px",
          background:
            "linear-gradient(180deg, rgba(107,84,73,0.92) 0%, rgba(66,43,34,0.88) 100%)",
          border: "1px solid rgba(255,255,255,0.14)",
          boxShadow: "0 24px 40px rgba(0,0,0,0.35)",
          backdropFilter: "blur(6px)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: { xs: 1.8, sm: 2.4, md: 3 },
          opacity: 0,
        }}
        className="profile-card"
      >
        <CardMedia
          component="img"
          image="/assets/pp.jpg"
          title="Photo Iqbal Gantenk"
          sx={{
            width: { xs: 112, sm: 136, md: 150 },
            height: { xs: 112, sm: 136, md: 150 },
            borderRadius: "50%",
            border: "4px solid rgba(255,255,255,0.6)",
            boxShadow: "0 18px 30px rgba(0,0,0,0.28)",
            objectFit: "cover",
            mt: { xs: -6, sm: -8, md: -10 },
          }}
          className="profile-avatar"
        />
        <Stack
          spacing={{ xs: 0.5, sm: 0.7, md: 0.8 }}
          alignItems="center"
          sx={{ width: "100%", mt: { xs: 0.25, sm: 0.5, md: 0 } }}
          className="profile-info"
        >
          <Typography
            variant="h6"
            sx={{ textAlign: "center", fontWeight: 600 }}
          >
            Iqbal Pradipta
          </Typography>
          <Typography
            sx={{ textAlign: "center", color: "rgba(255,255,255,0.72)" }}
          >
            Fullstack Developer
          </Typography>
        </Stack>
        <Divider
          sx={{ width: "100%", borderColor: "rgba(255,255,255,0.18)" }}
          className="profile-divider"
        />
        <Stack
          spacing={{ xs: 0.7, sm: 0.95, md: 1.1 }}
          alignItems="stretch"
          sx={{
            width: "100%",
            flexGrow: { xs: 0, sm: 0, md: 1 },
            justifyContent: { xs: "flex-start", md: "center" },
          }}
          className="profile-actions"
        >
          <Typography
            component="span"
            sx={{
              fontWeight: 700,
              textAlign: "center",
              letterSpacing: { xs: 0.3, sm: 0.45, md: 0.6 },
              textTransform: "uppercase",
              fontSize: { xs: "0.82rem", sm: "0.9rem", md: "0.95rem" },
            }}
          >
            Let's Connect With Me!
          </Typography>
          <GithubButton />
          <LinkedInButton />
          <EmailButton />
          <WhatsAppButton />
          <DownloadCV />
        </Stack>
      </Box>
    </>
  );
}
