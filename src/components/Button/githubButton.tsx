import { Button } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";


function GithubButton() {
  return (
    <>
      <Button
        variant="contained"
        startIcon={<GitHubIcon style={{ color: "black" }} />}
        href="https://github.com/iqbalpradipta"
        target="_blank"
        sx={{
            backgroundColor: '#1c2128',
            '&:hover': {
              backgroundColor: '#22272e',
              color: 'white',
            },
            width: '100%',
          }}
        
      >
        GitHub
      </Button>
    </>
  );
}

export default GithubButton