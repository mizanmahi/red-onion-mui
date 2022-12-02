import { createTheme } from '@mui/material';

export const theme = createTheme({
   palette: {
      primary: {
         main: '#f94944',
         mainBg: '#191919',
         hover: '#ff9caf',
         greyText: '#727272',
      },
   },

   components: {
      MuiContainer: {
         defaultProps: {
            maxWidth: 'xl',
         },
      },
      MuiButton: {
         styleOverrides: {
            root: {
               fontSize: '1rem',
               padding: '0.5rem 2rem',
               borderRadius: '40px',
               textTransform: 'capitalize',
               color: '#ffffff'
            },
         },
         defaultProps: {
            variant: 'contained',
         },
      },

      MuiTypography: {
         styleOverrides: {
            root: {
               color: '#191919',
            },
         },
      },
   },
});
