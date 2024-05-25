import { AppBar, Toolbar, Typography } from "@mui/material";
import Modal from "./Modal";

function Navbar() {
  return (
    <>
      <AppBar
        position="static"
        sx={{ backgroundColor: "transparent", boxShadow: "none" }}
      >
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1, color: '#f6956c' }}>
            {"<Iqbal "}
          </Typography>
          <Typography variant="h6" style={{ flexGrow: 300, color: '#F8F6E3' }}>
            {"Pradipta /> "}
          </Typography>
          <Modal />
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Navbar;
