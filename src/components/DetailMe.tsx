import { Box, Tab, Tabs } from "@mui/material";
import Who from "./Detail/Who";
import Project from "./Detail/Project";
import Scrollbar from "./Custom/Scroll";
import { useRef, useEffect, useState, SyntheticEvent, useLayoutEffect } from "react";
import gsap from "gsap";
import { styled } from "@mui/material/styles";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FolderSpecialOutlinedIcon from "@mui/icons-material/FolderSpecialOutlined";

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
      gsap.set(boxRef.current, {
        autoAlpha: 0,
        y: 36,
        scale: 0.96,
        filter: "blur(12px)",
        boxShadow: "0 4px 18px rgba(0,0,0,0.15)",
      });
      gsap.set(".detail-tab", { autoAlpha: 0, y: 18, rotateX: -35, transformOrigin: "50% 0%" });
      gsap.set(".detail-panel", { autoAlpha: 0, y: 28, filter: "blur(12px)" });

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.to(boxRef.current, {
        autoAlpha: 1,
        y: 0,
        scale: 1,
        filter: "blur(0px)",
        boxShadow: "14px -7px 19px -3px rgba(79,79,79,0.58)",
        duration: 0.75,
      })
        .to(
          ".detail-tab",
          {
            autoAlpha: 1,
            y: 0,
            rotateX: 0,
            duration: 0.45,
            stagger: 0.08,
          },
          "-=0.35"
        )
        .to(
          ".detail-panel",
          {
            autoAlpha: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 0.6,
          },
          "-=0.3"
        );
    }, boxRef);

    return () => ctx.revert();
  }, []);

  useLayoutEffect(() => {
    if (!panelRef.current) return undefined;
    if (!hasMounted.current) {
      hasMounted.current = true;
      return undefined;
    }

    tabTween.current?.kill();
    gsap.set(panelRef.current, {
      autoAlpha: 0,
      y: 24,
      filter: "blur(6px)",
    });

    tabTween.current = gsap.to(panelRef.current, {
      autoAlpha: 1,
      y: 0,
      filter: "blur(0px)",
      duration: 0.55,
      ease: "power3.out",
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
        maxWidth: { xs: "100%", sm: "100%", md: 720, lg: 780, xl: 840 },
        height: { xs: "auto", md: "100%" },
        minHeight: { xs: "auto", sm: "auto", md: "70vh" },
        maxHeight: { xs: "none", sm: "none", md: "82vh" },
        mt: { xs: 0.6, sm: 1.2, md: 1.6 },
        mb: { xs: 0, md: 0 },
        mx: "auto",
        display: "flex",
        flexDirection: "column",
        gap: { xs: 2, md: 2.5 },
        p: { xs: 2.3, sm: 3.2, md: 4 },
        border: "1px solid #886150",
        borderRadius: "10px",
        boxShadow: "14px -7px 19px -3px rgba(79,79,79,0.58)",
        backgroundColor: "#6b5449",
        opacity: 0,
      }}
    >
      <TabsWrapper>
        <StyledTabs value={tabIndex} onChange={handleTabChange} variant="scrollable" scrollButtons="auto">
          <StyledTab
            disableRipple
            icon={<PersonOutlineOutlinedIcon fontSize="small" />}
            iconPosition="start"
            label="Profile"
            className="detail-tab"
          />
          <StyledTab
            disableRipple
            icon={<FolderSpecialOutlinedIcon fontSize="small" />}
            iconPosition="start"
            label="Projects"
            className="detail-tab"
          />
        </StyledTabs>
      </TabsWrapper>
      <Box
        sx={{
          flexGrow: 1,
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
              mt: { xs: 1.2, sm: 1.6 },
              pr: { xs: 0.3, sm: 1 },
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
              mt: { xs: 1.2, sm: 1.6 },
              pr: { xs: 0.3, sm: 1 },
              ...styles.scrollBox,
            }}
          >
            <Project />
          </Box>
        )}
      </Box>
    </Box>
  );
}

export default DetailMe;

const TabsWrapper = styled(Box)(() => ({
  position: "relative",
  display: "flex",
  alignItems: "flex-end",
  padding: "0 8px 8px",
  overflow: "visible",
  '&::after': {
    content: '""',
    position: "absolute",
    left: 8,
    right: 8,
    bottom: 0,
    height: 1,
    background: "rgba(255,255,255,0.24)",
  },
}));

const StyledTabs = styled(Tabs)(() => ({
  minHeight: 0,
  padding: 0,
  overflow: "visible",
  '& .MuiTabs-scroller': {
    overflow: "visible",
  },
  '& .MuiTabs-flexContainer': {
    gap: 18,
    alignItems: "flex-end",
  },
  '& .MuiTabs-indicator': {
    display: "none",
  },
  '& .MuiButtonBase-root': {
    minHeight: 0,
  },
}));

const StyledTab = styled(Tab)(() => ({
  minHeight: 0,
  padding: 0,
  position: "relative",
  fontWeight: 600,
  letterSpacing: 0.6,
  textTransform: "uppercase",
  fontSize: "0.78rem",
  paddingInline: 28,
  paddingBlock: 12,
  color: "rgba(255,255,255,0.8)",
  background: "rgba(92,65,53,0.78)",
  border: "1px solid rgba(255,255,255,0.26)",
  borderBottom: "none",
  borderRadius: "16px 16px 0 0",
  clipPath: "polygon(0 0, calc(100% - 20px) 0, 100% 100%, 0 100%)",
  boxShadow: "0 6px 18px rgba(0,0,0,0.35)",
  transition: "all 0.25s ease",
  lineHeight: 1,
  display: "inline-flex",
  '&:hover': {
    background: "rgba(107,84,73,0.92)",
    color: "#fff",
  },
  '&.Mui-selected': {
    background: "rgba(54,31,24,0.92)",
    color: "#fff",
    boxShadow: "0 12px 24px rgba(0,0,0,0.4)",
    zIndex: 3,
  },
  '&::after': {
    content: '""',
    position: "absolute",
    top: 1,
    right: -20,
    width: 20,
    height: "calc(100% - 1px)",
    background: "inherit",
    borderTop: "1px solid rgba(255,255,255,0.26)",
    borderRight: "1px solid rgba(255,255,255,0.26)",
    borderBottom: "none",
    borderTopRightRadius: 14,
    transform: "skewX(-28deg)",
    zIndex: -1,
  },
  '&.Mui-selected::after': {
    background: "rgba(54,31,24,0.92)",
  },
  '&:last-of-type': {
    marginRight: 0,
  },
  '& .MuiTab-iconWrapper': {
    marginBottom: 0,
    marginRight: 10,
    color: "rgba(255,255,255,0.8)",
  },
  '&.Mui-selected .MuiTab-iconWrapper': {
    color: "#fff",
  },
  '@media (max-width: 900px)': {
    fontSize: "0.72rem",
    paddingInline: 22,
  },
  '@media (max-width: 600px)': {
    fontSize: "0.68rem",
    paddingInline: 18,
    paddingBlock: 10,
  },
}));
