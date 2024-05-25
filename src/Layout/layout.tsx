import { Container } from "@mui/material";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <Container>
        <div>
          <Navbar />
        </div>
        <div>
          <Outlet />
        </div>
      </Container>
    </>
  );
}

export default Layout;
