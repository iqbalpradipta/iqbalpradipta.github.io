import { Button } from "@mui/material";
import SimCardDownloadIcon from "@mui/icons-material/SimCardDownload";

function DownloadCV() {
  return (
    <Button
      variant="contained"
      startIcon={<SimCardDownloadIcon fontSize="small" />}
      href="https://drive.google.com/uc?export=download&id=11QYwP_KFPhfugoLNlgPll3UwEb4KeF1J"
      target="_blank"
      sx={{
        width: "100%",
        py: 1.2,
        background: "linear-gradient(135deg, #f5a623 0%, #e09315 100%)",
        color: "#121018",
        fontWeight: 800,
        fontSize: "0.85rem",
        letterSpacing: "0.02em",
        borderRadius: "14px",
        boxShadow: "0 6px 20px -4px rgba(245, 166, 35, 0.45)",
        transition: "all 0.2s ease",
        "&:hover": {
          background: "linear-gradient(135deg, #f5a623 0%, #e09315 100%)",
          transform: "translateY(-2px)",
          boxShadow: "0 10px 26px -4px rgba(245, 166, 35, 0.6)",
        },
      }}
    >
      Download CV
    </Button>
  );
}

export default DownloadCV;