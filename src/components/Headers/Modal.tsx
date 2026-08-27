import * as React from "react";
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
          borderRadius: "6px",
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
          backgroundColor: "var(--color-paper)",
          border: "1px solid var(--color-rule)",
          boxShadow: "0 4px 10px -4px oklch(20% 0.012 250 / 0.18)",
          color: "var(--color-ink)",
          transition: "transform var(--dur-short) var(--ease-out), background-color var(--dur-short) var(--ease-out)",
          "&:hover": {
            backgroundColor: "var(--color-paper-3)",
            transform: "translateY(-2px)",
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
            background: "var(--color-paper)",
            border: "1px solid var(--color-rule)",
            boxShadow: "var(--shadow-soft)",
            color: "var(--color-ink)",
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
              fontFamily: "var(--font-label)",
              fontWeight: 600,
              fontSize: "0.68rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "var(--color-ink-3)",
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
              transition: "background-color var(--dur-micro) var(--ease-out)",
              "&:hover": {
                backgroundColor: "oklch(66% 0.18 235 / 0.08)",
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
                color: "var(--color-ink)",
                backgroundColor: "var(--color-paper-2)",
                border: "1px solid var(--color-rule)",
              }}
            >
              {item.icon}
            </ListItemIcon>
            <ListItemText
              primary={item.label}
              secondary={item.description}
              primaryTypographyProps={{ fontWeight: 700, color: "var(--color-ink)" }}
              secondaryTypographyProps={{
                sx: {
                  color: "var(--color-ink-3)",
                  fontSize: "0.72rem",
                },
              }}
            />
            <LaunchIcon sx={{ fontSize: 16, color: "var(--color-ink-3)" }} />
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
}