import { Container, Grid } from "@mui/material";
import Navbar from "../components/Headers/Navbar";
import { Outlet } from "react-router-dom";
import Me from "../components/Me";
import { useState, useEffect } from "react";
import Loading from "../components/Loading/loading";

function Layout() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 3300);
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <Container maxWidth="lg" sx={{ py: 2 }}>
        <Navbar />
        <Grid
          container
          rowSpacing={3}
          columnSpacing={{ xs: 0, sm: 3, md: 4 }}
          justifyContent="center"
        >
          <Grid item xs={12} md={5} lg={4} display="flex" justifyContent="center">
            <Me />
          </Grid>
          <Grid item xs={12} md={7} lg={8} display="flex" justifyContent="center">
            <Outlet />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default Layout;
