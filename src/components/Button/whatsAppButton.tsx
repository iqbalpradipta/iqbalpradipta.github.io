import { Button } from "@mui/material";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';


function WhatsAppButton() {
  return (
    <>
      <Button
        variant="contained"
        startIcon={<WhatsAppIcon />}
        href="https://wa.me/6281385626786"
        target="_blank"
        sx={{
          backgroundColor: 'green',
          '&:hover': {
            backgroundColor: '#68db5e',
            color: 'white',
          },
          width: '100%',
          mt: '10px',
          textAlign: 'center', 
          alignItems: 'center', 
          justifyContent: 'center',
        }}
      >
        WhatsApp
      </Button>
    </>
  );
}

export default WhatsAppButton;
