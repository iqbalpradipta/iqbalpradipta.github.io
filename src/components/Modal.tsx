import React from "react";
import {
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText,
  IconButton,
  Typography,
  Switch,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FolderIcon from "@mui/icons-material/Folder";

export default function Modal() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [darkMode, setDarkMode] = React.useState(false);

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div>
      <IconButton
        edge="start"
        color="inherit"
        aria-label="menu"
        onClick={handleClick}
      >
        <MenuIcon />
      </IconButton>
      <Menu
        id={id}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        sx={{
          '& .MuiPaper-root': {
            backgroundColor: darkMode ? '#303030' : '#ffffff',
            color: darkMode ? '#ffffff' : '#000000',
          },
        }}

      >
        <MenuItem>
          <ListItemIcon>
            <FolderIcon />
          </ListItemIcon>
          <ListItemText primary="Projects" />
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <GitHubIcon />
          </ListItemIcon>
          <ListItemText primary="Github" />
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <LinkedInIcon />
          </ListItemIcon>
          <ListItemText primary="Linkedin" />
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <WhatsAppIcon />
          </ListItemIcon>
          <ListItemText primary="Whatsapp" />
        </MenuItem>
        <MenuItem disabled>
          <Typography variant="body2" color="textSecondary">
            Actions
          </Typography>
        </MenuItem>
        <MenuItem>
          <ListItemText primary="Light mode" />
          <Switch checked={darkMode} onChange={toggleDarkMode} />
        </MenuItem>
        <MenuItem>
          <ListItemText primary="العربية" />
        </MenuItem>
      </Menu>
    </div>
  );
}
