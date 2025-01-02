import { Button } from "@mui/material";
import SimCardDownloadIcon from '@mui/icons-material/SimCardDownload';


function DownloadCV() {
  return (
    <>
      <Button
        variant="contained"
        startIcon={<SimCardDownloadIcon style={{ color: "white", margin: '0' }} />}
        href="https://drive.google.com/uc?export=download&id=11QYwP_KFPhfugoLNlgPll3UwEb4KeF1J"
        target="_blank"
        sx={{
          backgroundColor: '#ac7d64',
          '&:hover': {
            backgroundColor: '#785d52',
            color: 'white',
          },
          width: '100%',
          mt: '10px',
          textAlign: 'center', 
          alignItems: 'center', 
          justifyContent: 'center',
        }}
      >
        Download CV
      </Button>
    </>
  );
}

export default DownloadCV;
