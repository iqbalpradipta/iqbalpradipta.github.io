import React from "react";
import {
  Box,
  IconButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LaunchIcon from "@mui/icons-material/Launch";

const quickLinks = [
  {
    label: "Projects",
    icon: (
      <Box
        sx={{
          width: 18,
          height: 18,
          borderRadius: "4px",
          border: "2px solid currentColor",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "0.55rem",
          fontWeight: 700,
          letterSpacing: 0.4,
        }}
      >
        PR
      </Box>
    ),
    href: "#projects",
    description: "Showcase & case studies",
  },
  {
    label: "Github",
    icon: <GitHubIcon fontSize="small" />,
    href: "https://github.com/iqbalpradipta",
    description: "Open source & experiments",
  },
  {
    label: "Linkedin",
    icon: <LinkedInIcon fontSize="small" />,
    href: "https://linkedin.com/in/iqbalpradipta",
    description: "Professional timeline",
  },
  {
    label: "Whatsapp",
    icon: <WhatsAppIcon fontSize="small" />,
    href: "https://wa.me/6281385626786",
    description: "Say hello via chat",
  },
];

export default function Modal() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "navbar-menu" : undefined;

  return (
    <Box>
      <IconButton
        edge="start"
        color="inherit"
        aria-label="menu"
        onClick={handleClick}
        sx={{
          borderRadius: "14px",
          backgroundColor: "rgba(255,255,255,0.14)",
          border: "1px solid rgba(255,255,255,0.24)",
          backdropFilter: "blur(10px)",
          boxShadow: "0 12px 24px rgba(0,0,0,0.28)",
          color: "#fdf8ef",
          transition: "all 0.25s ease",
          '&:hover': {
            backgroundColor: "rgba(255,255,255,0.22)",
            transform: "translateY(-1px)",
          },
        }}
      >
        <MenuIcon />
      </IconButton>
      <Menu
        id={id}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            mt: 1.5,
            minWidth: 240,
            px: 1.2,
            py: 1.1,
            borderRadius: "18px",
            background: "linear-gradient(135deg, rgba(26,16,12,0.96) 0%, rgba(54,31,24,0.94) 100%)",
            border: "1px solid rgba(255,255,255,0.18)",
            boxShadow: "0 24px 40px rgba(0,0,0,0.32)",
            backdropFilter: "blur(16px)",
            color: "rgba(255,255,255,0.92)",
          },
        }}
        MenuListProps={{
          dense: true,
          sx: {
            display: "flex",
            flexDirection: "column",
            gap: 0.6,
          },
        }}
      >
        <Box sx={{ px: 1, pb: 0.4 }}>
          <Typography
            variant="subtitle2"
            sx={{
              fontWeight: 600,
              letterSpacing: 1.2,
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.55)",
            }}
          >
            Quick links
          </Typography>
        </Box>

        {quickLinks.map((item) => (
          <MenuItem
            key={item.label}
            onClick={() => {
              handleClose();
              if (item.href.startsWith("http")) {
                window.open(item.href, "_blank", "noopener,noreferrer");
              } else {
                window.location.hash = item.href;
              }
            }}
            sx={{
              borderRadius: "12px",
              px: 1.2,
              py: 1,
              gap: 1.2,
              transition: "all 0.2s ease",
              '&:hover': {
                backgroundColor: "rgba(255,255,255,0.08)",
                transform: "translateX(4px)",
              },
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 38,
                width: 38,
                height: 38,
                borderRadius: "12px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "rgba(255,255,255,0.9)",
                backgroundColor: "rgba(255,255,255,0.1)",
              }}
            >
              {item.icon}
            </ListItemIcon>
            <ListItemText
              primary={item.label}
              secondary={item.description}
              primaryTypographyProps={{ fontWeight: 600 }}
              secondaryTypographyProps={{
                sx: {
                  color: "rgba(255,255,255,0.52)",
                  fontSize: "0.72rem",
                },
              }}
            />
            <LaunchIcon sx={{ fontSize: 16, opacity: 0.4 }} />
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
}
