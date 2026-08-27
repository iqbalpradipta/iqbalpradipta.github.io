import { Container, Box } from "@mui/material";
import Navbar from "../components/Headers/Navbar";
import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import Loading from "../components/Loading/loading";
import FAQChat from "../components/LiveChat/FAQChat";

function Layout() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isActive = true;
    const timerId = window.setTimeout(() => {
      if (isActive) {
        setLoading(false);
      }
    }, 4500);

    return () => {
      isActive = false;
      window.clearTimeout(timerId);
    };
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <Container
        maxWidth={false}
        disableGutters
        sx={{
          width: { xs: "calc(100% - 24px)", md: "calc(100% - 80px)" },
          maxWidth: { xs: "100%", lg: "1140px", xl: "1280px" },
          mx: "auto",
          my: { xs: 1.5, md: 3 },
          px: { xs: 2.2, sm: 3.5, md: 4.5 },
          pt: { xs: 1.5, md: 2 },
          pb: { xs: 2.2, md: 3.5 },
          height: { xs: "auto", md: "calc(100vh - 48px)" },
          maxHeight: { xs: "none", md: "calc(100vh - 48px)" },
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
          background: "rgba(14, 12, 20, 0.72)",
          backdropFilter: "blur(32px) saturate(140%)",
          border: "1px solid rgba(255, 255, 255, 0.08)",
          borderRadius: { xs: "22px", md: "32px" },
          boxShadow: "0 32px 64px -16px rgba(0, 0, 0, 0.75), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
        }}
      >
        <Navbar />
        <Box
          sx={{
            flexGrow: 1,
            minHeight: 0,
            height: { xs: "auto", md: "calc(100% - 64px)" },
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
            mt: { xs: 1, md: 1.5 },
          }}
        >
          <Outlet />
        </Box>
      </Container>
      <FAQChat />
    </>
  );
}

export default Layout;