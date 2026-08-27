import { Box, CardMedia, IconButton, Stack, Tab, Tabs, Tooltip, Typography } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import Who from "./Detail/Who";
import Project from "./Detail/Project";
import Now from "./Detail/Now";
import Uses from "./Detail/Uses";
import Scrollbar from "./Custom/Scroll";
import DownloadCV from "./Button/downloadCV";
import {
  useRef,
  useEffect,
  useState,
  SyntheticEvent,
  useLayoutEffect,
} from "react";
import gsap from "gsap";
import { styled } from "@mui/material/styles";

const socialItems = [
  { label: "GitHub", icon: <GitHubIcon fontSize="small" />, href: "https://github.com/iqbalpradipta" },
  { label: "LinkedIn", icon: <LinkedInIcon fontSize="small" />, href: "https://linkedin.com/in/iqbalpradipta" },
  { label: "WhatsApp", icon: <WhatsAppIcon fontSize="small" />, href: "https://wa.me/6281385626786" },
  { label: "Email", icon: <MailOutlineIcon fontSize="small" />, href: "mailto:iqbalpradipta2@gmail.com" },
];

function DetailMe() {
  const styles = Scrollbar();
  const boxRef = useRef<HTMLDivElement>(null);
  const [tabIndex, setTabIndex] = useState(0);
  const panelRef = useRef<HTMLDivElement | null>(null);
  const tabTween = useRef<gsap.core.Tween | null>(null);
  const hasMounted = useRef(false);

  const handleTabChange = (_event: SyntheticEvent, newValue: number) => {
    setTabIndex(newValue);
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.set(boxRef.current, { autoAlpha: 0, y: 24 });
        gsap.set(".hero-header", { autoAlpha: 0, y: -12 });
        gsap.set(".detail-panel", { autoAlpha: 0, y: 14 });

        const tl = gsap.timeline({ defaults: { ease: "expo.out" } });

        tl.to(boxRef.current, { autoAlpha: 1, y: 0, duration: 0.7 })
          .to(".hero-header", { autoAlpha: 1, y: 0, duration: 0.5 }, "-=0.4")
          .to(".detail-panel", { autoAlpha: 1, y: 0, duration: 0.45 }, "-=0.3");
      });
    }, boxRef);

    return () => ctx.revert();
  }, []);

  useLayoutEffect(() => {
    if (!panelRef.current) return undefined;
    if (!hasMounted.current) {
      hasMounted.current = true;
      return undefined;
    }

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return undefined;
    }

    tabTween.current?.kill();
    gsap.set(panelRef.current, { autoAlpha: 0, y: 12 });

    tabTween.current = gsap.to(panelRef.current, {
      autoAlpha: 1,
      y: 0,
      duration: 0.4,
      ease: "expo.out",
    });

    return () => {
      tabTween.current?.kill();
    };
  }, [tabIndex]);

  return (
    <Box
      ref={boxRef}
      sx={{
        width: "100%",
        height: "100%",
        minHeight: 0,
        maxHeight: "100%",
        display: "flex",
        flexDirection: "column",
        gap: { xs: 1.8, md: 2.4 },
        overflow: "hidden",
      }}
    >
      {/* Profile Hero Header */}
      <Box className="hero-header" sx={{ width: "100%", pt: { xs: 0.2, md: 0.8 } }}>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={{ xs: 1.8, sm: 2.5 }}
          alignItems={{ xs: "flex-start", sm: "center" }}
          justifyContent="space-between"
          sx={{ width: "100%" }}
        >
          {/* Photo & Name Info */}
          <Stack direction="row" spacing={{ xs: 1.6, sm: 2 }} alignItems="center">
            <CardMedia
              component="img"
              image="/assets/pp.jpg"
              title="Iqbal Pradipta"
              sx={{
                width: { xs: 60, sm: 76, md: 82 },
                height: { xs: 60, sm: 76, md: 82 },
                borderRadius: "50%",
                border: "2px solid rgba(255, 255, 255, 0.18)",
                boxShadow: "0 10px 24px rgba(0, 0, 0, 0.55)",
                objectFit: "cover",
                flexShrink: 0,
              }}
            />
            <Stack spacing={0.2} alignItems="flex-start">
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 800,
                  fontSize: { xs: "1.15rem", sm: "1.45rem", md: "1.55rem" },
                  letterSpacing: "-0.02em",
                  color: "#f3ede2",
                  lineHeight: 1.15,
                }}
              >
                Iqbal Pradipta
              </Typography>
              <Typography
                sx={{
                  fontFamily: "var(--font-label)",
                  fontSize: { xs: "0.64rem", sm: "0.72rem" },
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "#f5a623",
                  mt: 0.2,
                }}
              >
                Fullstack Developer • 📍 Bekasi, ID
              </Typography>
            </Stack>
          </Stack>

          {/* Right Header Stack: 4 Social Icons ABOVE, Download CV BELOW */}
          <Stack
            spacing={1}
            alignItems={{ xs: "flex-start", sm: "flex-end" }}
            sx={{ width: { xs: "100%", sm: "auto" }, mt: { xs: 0.5, sm: 0 } }}
          >
            {/* 4 Social Icons */}
            <Stack direction="row" spacing={0.8} alignItems="center">
              {socialItems.map((s) => (
                <Tooltip key={s.label} title={s.label} arrow placement="top">
                  <IconButton
                    component="a"
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    sx={{
                      color: "rgba(243, 237, 226, 0.75)",
                      background: "rgba(255, 255, 255, 0.04)",
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                      borderRadius: "10px",
                      width: { xs: 34, sm: 36 },
                      height: { xs: 34, sm: 36 },
                      transition: "all 0.2s ease",
                      "&:hover": {
                        background: "rgba(255, 255, 255, 0.12)",
                        color: "#f5a623",
                        borderColor: "rgba(245, 166, 35, 0.4)",
                        transform: "translateY(-2px)",
                      },
                    }}
                  >
                    {s.icon}
                  </IconButton>
                </Tooltip>
              ))}
            </Stack>

            {/* Download CV Button */}
            <Box sx={{ width: { xs: "100%", sm: 155 } }}>
              <DownloadCV />
            </Box>
          </Stack>
        </Stack>
      </Box>

      {/* Minimalist Navigation Bar */}
      <NavHeaderTrack>
        <StyledTabs
          value={tabIndex}
          onChange={handleTabChange}
          variant="scrollable"
          scrollButtons={false}
        >
          <StyledTab disableRipple label="Profile" />
          <StyledTab disableRipple label="Projects" />
          <StyledTab disableRipple label="Now" />
          <StyledTab disableRipple label="Uses" />
        </StyledTabs>
      </NavHeaderTrack>

      {/* Inner Content Pane (Full Width 100%) */}
      <Box
        sx={{
          flexGrow: 1,
          minHeight: 0,
          height: "100%",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {tabIndex === 0 && (
          <Box
            key="profile"
            ref={panelRef}
            role="tabpanel"
            className="detail-panel"
            sx={{
              flexGrow: 1,
              height: "100%",
              pr: { xs: 0.5, sm: 1.5 },
              ...styles.scrollBox,
            }}
          >
            <Who />
          </Box>
        )}
        {tabIndex === 1 && (
          <Box
            key="projects"
            ref={panelRef}
            role="tabpanel"
            className="detail-panel"
            sx={{
              flexGrow: 1,
              height: "100%",
              pr: { xs: 0.5, sm: 1.5 },
              ...styles.scrollBox,
            }}
          >
            <Project />
          </Box>
        )}
        {tabIndex === 2 && (
          <Box
            key="now"
            ref={panelRef}
            role="tabpanel"
            className="detail-panel"
            sx={{
              flexGrow: 1,
              height: "100%",
              pr: { xs: 0.5, sm: 1.5 },
              ...styles.scrollBox,
            }}
          >
            <Now />
          </Box>
        )}
        {tabIndex === 3 && (
          <Box
            key="uses"
            ref={panelRef}
            role="tabpanel"
            className="detail-panel"
            sx={{
              flexGrow: 1,
              height: "100%",
              pr: { xs: 0.5, sm: 1.5 },
              ...styles.scrollBox,
            }}
          >
            <Uses />
          </Box>
        )}
      </Box>
    </Box>
  );
}

export default DetailMe;

const NavHeaderTrack = styled(Box)(() => ({
  width: "100%",
  paddingBottom: "4px",
  borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
  flexShrink: 0,
}));

const StyledTabs = styled(Tabs)(() => ({
  width: "100%",
  minHeight: 0,
  padding: 0,
  "& .MuiTabs-scroller": {
    overflowX: "auto",
  },
  "& .MuiTabs-scrollButtons": {
    display: "none",
  },
  "& .MuiTabs-flexContainer": {
    gap: 20,
    "@media (min-width: 600px)": {
      gap: 28,
    },
    "@media (min-width: 900px)": {
      gap: 32,
    },
  },
  "& .MuiTabs-indicator": {
    height: "2px",
    background: "#f5a623",
    borderRadius: "2px",
    boxShadow: "0 0 8px #f5a623",
  },
  "& .MuiButtonBase-root": {
    minHeight: 0,
  },
}));

const StyledTab = styled(Tab)(() => ({
  minHeight: 0,
  padding: "4px 0 8px 0",
  fontFamily: "var(--font-display)",
  fontWeight: 700,
  letterSpacing: "-0.01em",
  textTransform: "none",
  fontSize: "0.85rem",
  color: "rgba(243, 237, 226, 0.45)",
  background: "transparent",
  transition: "all 0.2s ease",
  lineHeight: 1,
  whiteSpace: "nowrap",
  "&:hover": {
    color: "#f3ede2",
  },
  "&.Mui-selected": {
    color: "#f5a623",
    fontWeight: 800,
  },
  "@media (min-width: 600px)": {
    fontSize: "0.95rem",
  },
  "@media (min-width: 900px)": {
    fontSize: "1.02rem",
  },
}));