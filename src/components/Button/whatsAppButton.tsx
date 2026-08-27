import { IconButton, Tooltip } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

function WhatsAppButton() {
  return (
    <Tooltip title="WhatsApp Chat" arrow placement="top">
      <IconButton
        component="a"
        href="https://wa.me/6281385626786"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
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
        <WhatsAppIcon fontSize="small" />
      </IconButton>
    </Tooltip>
  );
}

export default WhatsAppButton;