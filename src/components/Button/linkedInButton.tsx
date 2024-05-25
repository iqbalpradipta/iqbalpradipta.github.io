import { Button } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";


function LinkedInButton() {
  return (
    <>
      <Button
        variant="contained"
        startIcon={<LinkedInIcon style={{ color: "blue", margin: '0' }} />}
        href="https://linkedin.com/in/iqbalpradipta"
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

export default LinkedInButton;
