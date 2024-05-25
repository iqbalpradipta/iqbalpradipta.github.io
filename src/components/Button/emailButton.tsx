import { Button } from "@mui/material";
import EmailIcon from '@mui/icons-material/Email';


function EmailButton() {
  return (
    <>
      <Button
        variant="contained"
        startIcon={<EmailIcon style={{ color: "red", margin: '0' }} />}
        href="https://github.com/iqbalpradipta"
        target="_blank"
        sx={{
          backgroundColor: '#151aa0',
          '&:hover': {
            backgroundColor: '#0b0ec9',
            color: 'white',
          },
          width: '100%',
          mt: '10px',
          textAlign: 'center', 
          alignItems: 'center', 
          justifyContent: 'center',
        }}
      >
        LinkedIn
      </Button>
    </>
  );
}

export default EmailButton;
