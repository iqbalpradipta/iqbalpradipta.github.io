import { Box, Tab, Tabs } from "@mui/material";
import Who from "./Detail/Who";
import Project from "./Detail/Project";
import Game from "./Detail/Game";
import Shop from "./Detail/Shop";
import Scrollbar from "./Custom/Scroll";
import {
  useRef,
  useEffect,
  useState,
  SyntheticEvent,
  useLayoutEffect,
} from "react";
import gsap from "gsap";
import { styled } from "@mui/material/styles";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FolderSpecialOutlinedIcon from "@mui/icons-material/FolderSpecialOutlined";
import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";
import SportsEsportsOutlinedIcon from "@mui/icons-material/SportsEsportsOutlined";

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
      gsap.set(".detail-tab", {
        autoAlpha: 0,
        y: 18,
        rotateX: -35,
        transformOrigin: "50% 0%",
      });
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
        maxHeight: { xs: "none", sm: "none", md: "80vh" },
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
        <StyledTabs
          value={tabIndex}
          onChange={handleTabChange}
          variant="scrollable"
        >
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
          <StyledTab
            disableRipple
            icon={<SportsEsportsOutlinedIcon fontSize="small" />}
            iconPosition="start"
            label="My Games"
            className="detail-tab"
          />
          <StyledTab
            disableRipple
            icon={<StorefrontOutlinedIcon fontSize="small" />}
            iconPosition="start"
            label="My Service"
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
        {tabIndex === 2 && (
          <Box
            key="games"
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
            <Game />
          </Box>
        )}
        {tabIndex === 3 && (
          <Box
            key="shop"
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
            <Shop />
          </Box>
        )}
      </Box>
    </Box>
  );
}

export default DetailMe;

const TabsWrapper = styled(Box)(() => ({
  width: "100%",
  position: "relative",
  display: "flex",
  alignItems: "flex-end",
  padding: "0 0 12px",
  overflow: "visible",
  "&::after": {
    content: '""',
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: 1,
    background: "rgba(255,255,255,0.28)",
    opacity: 0.7,
  },
}));

const StyledTabs = styled(Tabs)(() => ({
  width: "100%",
  marginBottom: -6,
  minHeight: 0,
  padding: 0,
  overflow: "visible",
  "& .MuiTabs-scroller": {
    overflow: "visible",
  },
  "& .MuiTabs-scrollButtons": {
    display: "none",
  },
  "& .MuiTabs-flexContainer": {
    gap: 18,
    alignItems: "flex-end",
  },
  "& .MuiTabs-indicator": {
    display: "none",
  },
  "& .MuiButtonBase-root": {
    minHeight: 0,
  },
}));

const StyledTab = styled(Tab)(() => ({
  minHeight: 0,
  padding: 0,
  position: "relative",
  fontWeight: 600,
  letterSpacing: 0.58,
  textTransform: "uppercase",
  fontSize: "0.78rem",
  paddingInline: 28,
  paddingBlock: 13,
  color: "rgba(58,37,22,0.92)",
  background: "linear-gradient(180deg, rgba(241,212,191,0.97) 0%, rgba(213,170,144,0.95) 100%)",
  border: "1px solid rgba(141,98,70,0.32)",
  borderBottom: "none",
  borderRadius: "26px 26px 0 0",
  boxShadow: "0 8px 16px rgba(0,0,0,0.22)",
  transition: "transform 0.22s ease, box-shadow 0.22s ease, background 0.22s ease, color 0.22s ease",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: 12,
  lineHeight: 1,
  "&::before": {
    content: '""',
    position: "absolute",
    inset: 1,
    borderRadius: "24px 24px 0 0",
    border: "1px solid rgba(255,255,255,0.28)",
    opacity: 0.45,
    pointerEvents: "none",
  },
  "&::after": {
    content: '""',
    position: "absolute",
    left: 0,
    right: 0,
    bottom: -9,
    height: 12,
    background: "rgba(0,0,0,0.18)",
    filter: "blur(18px)",
    opacity: 0,
    transition: "opacity 0.22s ease",
    borderRadius: 12,
  },
  "&:hover": {
    background: "linear-gradient(180deg, rgba(247,225,206,0.98) 0%, rgba(224,182,156,0.97) 100%)",
    color: "rgba(58,37,22,1)",
    boxShadow: "0 12px 22px rgba(0,0,0,0.28)",
  },
  "&.Mui-selected": {
    transform: "translateY(-6px)",
    background: "linear-gradient(180deg, rgba(125,83,60,1) 0%, rgba(80,47,32,1) 100%)",
    color: "#fff",
    boxShadow: "0 18px 26px rgba(0,0,0,0.32)",
  },
  "&.Mui-selected::before": {
    borderColor: "rgba(255,255,255,0.32)",
    opacity: 0.55,
  },
  "&.Mui-selected::after": {
    opacity: 0.55,
  },
  "& .MuiTab-iconWrapper": {
    marginBottom: 0,
    color: "rgba(91,62,44,0.88)",
    transition: "color 0.22s ease",
  },
  "&.Mui-selected .MuiTab-iconWrapper": {
    color: "#ffe9d9",
  },
  "@media (max-width: 900px)": {
    fontSize: "0.72rem",
    paddingInline: 22,
    gap: 10,
  },
  "@media (max-width: 600px)": {
    fontSize: "0.68rem",
    paddingInline: 16,
    paddingBlock: 11,
  },
}));
