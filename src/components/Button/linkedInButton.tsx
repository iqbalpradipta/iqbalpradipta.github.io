import { IconButton, Tooltip } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function LinkedInButton() {
  return (
    <Tooltip title="LinkedIn Profile" arrow placement="top">
      <IconButton
        component="a"
        href="https://linkedin.com/in/iqbalpradipta"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        sx={{
          color: "rgba(243, 237, 226, 0.8)",
          background: "rgba(255, 255, 255, 0.04)",
          border: "1px solid rgba(255, 255, 255, 0.1)",
          borderRadius: "12px",
          width: 44,
          height: 44,
          transition: "all 0.2s ease",
          "&:hover": {
            background: "rgba(255, 255, 255, 0.12)",
            color: "#f3ede2",
            transform: "translateY(-2px)",
          },
        }}
      >
        <LinkedInIcon fontSize="small" />
      </IconButton>
    </Tooltip>
  );
}

export default LinkedInButton;