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
    setTimeout(() => setLoading(false), 4500);
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <Container
        maxWidth="lg"
        sx={{
          py: { xs: 1, md: 1.2 },
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
        }}
      >
        <Navbar />
        <Grid
          container
          rowSpacing={3}
          columnSpacing={{ xs: 0, sm: 3, md: 4 }}
          justifyContent="center"
          sx={{ flexGrow: 1, overflow: "hidden", minHeight: 0, alignItems: "stretch" }}
        >
          <Grid
            item
            xs={12}
            md={5}
            lg={4}
            display="flex"
            justifyContent="center"
            sx={{ alignItems: "stretch", minHeight: 0 }}
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
            sx={{ alignItems: "stretch", minHeight: 0 }}
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




