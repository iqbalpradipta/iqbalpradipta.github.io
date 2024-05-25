import { Button } from "@mui/material";
import MailOutlineIcon from '@mui/icons-material/MailOutline';


function EmailButton() {
  return (
    <>
      <Button
        variant="contained"
        startIcon={<MailOutlineIcon style={{ color: "white", margin: '0' }} />}
        href="mailto:iqbalpradipta2@gmail.com"
        target="_blank"
        sx={{
          backgroundColor: 'red',
          '&:hover': {
            backgroundColor: '#db3333',
            color: 'white',
          },
          width: '100%',
          mt: '10px',
          textAlign: 'center', 
          alignItems: 'center', 
          justifyContent: 'center',
        }}
      >
        Email
      </Button>
    </>
  );
}

export default EmailButton;
