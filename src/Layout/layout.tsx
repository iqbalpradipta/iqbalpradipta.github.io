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
      <Container>
        <div>
          <Navbar />
        </div>
        <div>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 2, sm: 1, md: 1 }}
            display='flex'
          >
            <Me />
            <Outlet />
          </Grid>
        </div>
      </Container>
    </>
  );
}

export default Layout;
