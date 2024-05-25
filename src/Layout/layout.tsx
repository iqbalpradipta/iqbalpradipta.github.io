import { Container, Grid } from "@mui/material";
import Navbar from "../components/Headers/Navbar";
import { Outlet } from "react-router-dom";
import Me from "../components/Me";

function Layout() {
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
