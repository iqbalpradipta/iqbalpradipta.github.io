import { Box, Button, Typography, Divider } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import project from '../../mocks/project.json'

export default function ProjectCard() {
  return (
    <Box sx={{ maxWidth: 650, mt: 1 }}>
      <Divider style={{borderColor: '#ad8269'}} />
      {project.map((data, index) => (
        <Box sx={{marginBottom: 5, border: "1px solid #ad8269", borderRadius: "10px", p: "20px", mt: '10px' }} key={index}>
          <CardMedia
            component="img"
            alt={data.title}
            style={{ maxHeight: "60vh", objectFit: "cover"}}
            image={data.image}
          />
          <Typography variant="h6">{data.title}</Typography>
          <Typography variant="body2">
            {data.description}
          </Typography>
          <Button
            variant="contained"
            href={data.source}
            sx={{
              mt: "9px",
              backgroundColor: "#634136",
              "&:hover": {
                backgroundColor: "#eca898",
                color: "white",
              },
              color: "white"
              
            }}
          >
            Source Code
          </Button>
        </Box>
      ))}
    </Box>
  );
}
