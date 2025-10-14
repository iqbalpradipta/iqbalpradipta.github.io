import { Container, Grid } from "@mui/material";
import Navbar from "../components/Headers/Navbar";
import { Outlet } from "react-router-dom";
import Me from "../components/Me";
import { useState, useEffect } from "react";
import Loading from "../components/Loading/loading";
import FAQChat from "../components/LiveChat/FAQChat";

function Layout() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isActive = true;
    let timerId = 0;

    const timerPromise = new Promise<void>((resolve) => {
      timerId = window.setTimeout(resolve, 4500);
    });

    const preloadPromise = import("../components/DetailMe");

    Promise.all([timerPromise, preloadPromise]).then(() => {
      if (isActive) {
        setLoading(false);
      }
    });

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
          width: "100%",
          maxWidth: { xs: "100%", lg: "1240px", xl: "1400px" },
          mx: "auto",
          px: { xs: 1.4, sm: 2, md: 2.6 },
          py: { xs: 1.1, md: 1.4 },
          minHeight: { xs: "auto", md: "100vh" },
          display: "flex",
          flexDirection: "column",
          overflowX: "hidden",
          overflowY: { xs: "visible", md: "auto" },
        }}
      >
        <Navbar />
        <Grid
          container
          rowSpacing={{ xs: 2.2, md: 3 }}
          columnSpacing={{ xs: 1.2, sm: 2.2, md: 3.2, xl: 3.8 }}
          justifyContent="center"
          sx={{
            flexGrow: 1,
            minHeight: 0,
            overflow: "visible",
            alignItems: { xs: "stretch", md: "flex-start" },
          }}
        >
          <Grid
            item
            xs={12}
            md={5}
            lg={4}
            display="flex"
            justifyContent="center"
            sx={{ alignItems: "stretch", minHeight: 0, height: "100%" }}
          >
            <Me />
          </Grid>
          <Grid
            item
            xs={12}
            md={7}
            lg={8}
            display="flex"
            justifyContent="center"
            sx={{ alignItems: "stretch", minHeight: 0, height: "100%" }}
          >
            <Outlet />
          </Grid>
        </Grid>
      </Container>
      <FAQChat />
    </>
  );
}

export default Layout;

