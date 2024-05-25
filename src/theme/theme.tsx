import { createTheme } from "@mui/material";

const Theme = createTheme({
  palette: {
    background: {
      default: "#6AD4DD",
    },
    text: {
      primary: "#F8F6E3",
      secondary: "#7f5af0", 
      disabled: "#757575", // Warna teks yang dinonaktifkan
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundImage: `url(./src/assets/Mienar.gif)`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          width: '100%',
          height: '100%',
          imageRendering: 'auto',
        },
      },
    },
  },
});

export default Theme;
