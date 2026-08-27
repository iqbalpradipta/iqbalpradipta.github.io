import { Box, CardMedia, Divider, Stack, Typography } from "@mui/material";
import DownloadCV from "./Button/downloadCV";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const socialLinks = [
  { label: "github ↗", href: "https://github.com/iqbalpradipta" },
  { label: "linkedin ↗", href: "https://linkedin.com/in/iqbalpradipta" },
  { label: "whatsapp ↗", href: "https://wa.me/6281385626786" },
  { label: "email ↗", href: "mailto:iqbalpradipta2@gmail.com" },
];

export default function Me() {
  const boxRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!boxRef.current) return undefined;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.set(boxRef.current, { autoAlpha: 0, y: 24 });
        gsap.set(".profile-avatar", { autoAlpha: 0, scale: 0.92 });
        gsap.set(".profile-info", { autoAlpha: 0, y: 10 });

        const tl = gsap.timeline({
          defaults: { ease: "expo.out" },
          scrollTrigger: { trigger: boxRef.current, start: "top 85%", once: true },
        });

        tl.to(boxRef.current, { autoAlpha: 1, y: 0, duration: 0.7 })
          .to(".profile-avatar", { autoAlpha: 1, scale: 1, duration: 0.5 }, "-=0.4")
          .to(".profile-info", { autoAlpha: 1, y: 0, duration: 0.4 }, "-=0.3");
      });
    }, boxRef);

    return () => ctx.revert();
  }, []);

  return (
    <Box
      ref={boxRef}
      sx={{
        width: "100%",
        height: "100%",
        minHeight: 0,
        maxHeight: "100%",
        overflow: "hidden",
        px: { xs: 2.2, sm: 3, md: 3.5 },
        py: { xs: 3, sm: 3.5, md: 4 },
        borderRadius: "24px",
        background: "linear-gradient(165deg, rgba(26, 22, 36, 0.75) 0%, rgba(16, 14, 22, 0.88) 100%)",
        border: "1px solid rgba(255, 255, 255, 0.08)",
        boxShadow: "0 16px 36px -8px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.12)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
      }}
      className="profile-card"
    >
      {/* Highlighted Profile Header */}
      <Stack spacing={2} alignItems="center" sx={{ width: "100%" }}>
        <Box sx={{ position: "relative" }}>
          <CardMedia
            component="img"
            image="/assets/pp.jpg"
            title="Iqbal Pradipta"
            sx={{
              width: { xs: 120, sm: 136, md: 144 },
              height: { xs: 120, sm: 136, md: 144 },
              borderRadius: "50%",
              border: "3px solid rgba(255, 255, 255, 0.15)",
              boxShadow: "0 16px 36px rgba(0, 0, 0, 0.65)",
              objectFit: "cover",
            }}
            className="profile-avatar"
          />
        </Box>

        <Stack spacing={0.4} alignItems="center" className="profile-info" sx={{ width: "100%" }}>
          <Typography
            variant="h5"
            sx={{
              textAlign: "center",
              fontWeight: 800,
              fontSize: { xs: "1.3rem", md: "1.45rem" },
              letterSpacing: "-0.02em",
              color: "#f3ede2",
            }}
          >
            Iqbal Pradipta
          </Typography>
          <Typography
            sx={{
              textAlign: "center",
              fontFamily: "var(--font-label)",
              fontSize: "0.72rem",
              fontWeight: 700,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "#f5a623",
            }}
          >
            Fullstack Developer
          </Typography>
          <Typography
            sx={{
              fontSize: "0.82rem",
              color: "rgba(243, 237, 226, 0.55)",
              textAlign: "center",
              mt: 0.2,
            }}
          >
            Bekasi, Indonesia
          </Typography>
        </Stack>
      </Stack>

      <Divider sx={{ width: "100%", borderColor: "rgba(255, 255, 255, 0.08)", my: 1.5 }} />

      {/* Social Links & CV Action */}
      <Stack spacing={2} sx={{ width: "100%" }} alignItems="center">
        {/* Typographic Social Links */}
        <Stack direction="row" flexWrap="wrap" justifyContent="center" gap={1.8} sx={{ width: "100%" }}>
          {socialLinks.map((s) => (
            <Typography
              key={s.label}
              component="a"
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                fontFamily: "var(--font-label)",
                fontSize: "0.76rem",
                fontWeight: 600,
                color: "rgba(243, 237, 226, 0.65)",
                textDecoration: "none",
                transition: "all 0.2s ease",
                "&:hover": {
                  color: "#f5a623",
                  transform: "translateY(-1px)",
                },
              }}
            >
              {s.label}
            </Typography>
          ))}
        </Stack>

        <DownloadCV />
      </Stack>
    </Box>
  );
}