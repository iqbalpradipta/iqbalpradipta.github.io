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
  typography: {
    h1: {
      fontSize: '2rem',
      '@media (min-width:600px)': {
        fontSize: '2.5rem',
      },
      '@media (min-width:960px)': {
        fontSize: '3rem',
      },
      '@media (min-width:1280px)': {
        fontSize: '3.5rem',
      },
    },
    body1: {
      fontSize: '1rem',
      '@media (min-width:600px)': {
        fontSize: '1.2rem',
      },
      '@media (min-width:960px)': {
        fontSize: '1.5rem',
      },
      '@media (min-width:1280px)': {
        fontSize: '1.8rem',
      },
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundImage: `url(/assets/Mienar.gif)`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          width: '100%',
          height: '100%',
          imageRendering: 'auto',
          margin: 0,
          padding: 0,
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          '@media (max-width:600px)': {
            height: '56px',
          },
          '@media (min-width:600px)': {
            height: '64px',
          },
          '@media (min-width:960px)': {
            height: '72px',
          },
          '@media (min-width:1280px)': {
            height: '80px',
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
