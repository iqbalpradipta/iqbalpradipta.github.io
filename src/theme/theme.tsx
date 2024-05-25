import { createTheme } from '@mui/material';

const Theme = createTheme({
  palette: {
    background: {
      default: '#6b5449',
    },
    text: {
      primary: '#F8F6E3',
      secondary: '#7f5af0',
      disabled: '#757575',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundImage: `url(/assets/Mienar.gif)`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center center',
          width: '100%',
          height: '100%',
          imageRendering: 'auto',
          margin: 0,
          padding: 0,
          '@media (max-width:600px)': {
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
          },
        },
      },
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
});

export default Theme;
