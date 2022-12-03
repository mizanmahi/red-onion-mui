import { Box, styled } from '@mui/material';

export const CounterBox = styled(Box)(({ theme }) => ({
   borderRadius: '20px',
   border: `1px solid #e1e1e1`,
   width: '130px',
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'center',
   gap: '1rem',
   marginLeft: '1.5rem',
   padding: '2px 6px',
   '& > svg': {
      cursor: 'pointer',
   },
   '& > svg:hover': {
      color: theme.palette.primary.main,
   },
}));
