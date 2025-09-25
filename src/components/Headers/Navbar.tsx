import { AppBar, Stack, Toolbar } from "@mui/material";
import Modal from "./Modal";
import Logo from "./Logo";

function Navbar() {
  return (
    <AppBar
      position="static"
      color="transparent"
      elevation={0}
      sx={{
        backgroundColor: "transparent",
        px: { xs: 1.5, sm: 2, md: 3 },
        py: { xs: 1, sm: 1.5 },
      }}
    >
      <Toolbar disableGutters sx={{ justifyContent: "space-between", gap: 2 }}>
        <Logo />
        <Stack direction="row" alignItems="center" spacing={1.5}>
          <Modal />
        </Stack>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
