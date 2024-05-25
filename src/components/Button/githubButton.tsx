import { Button } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";


function GithubButton() {
  return (
    <>
      <Button
        variant="contained"
        startIcon={<GitHubIcon />}
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