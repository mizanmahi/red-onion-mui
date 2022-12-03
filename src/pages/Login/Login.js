import React from 'react';
import { Box, Button, Container, Typography } from '@mui/material';
import icon2 from '../../assets/icon-2.png';
import icon4 from '../../assets/icon-4.png';
import icon5 from '../../assets/icon-5.png';
import icon6 from '../../assets/icon-6.png';

const Login = () => {
   return (
      <Box
         sx={{
            height: '90vh',
            width: '100%',

            position: 'relative',
            overflow: 'hidden',
         }}
      >
         <Container>
            <Box
               sx={{
                  // background: '#f7f7f7',
                  width: '100%',
                  maxWidth: 500,
                  mx: 'auto',
                  mt: 10,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 3,
                  p: 2,
               }}
            >
               login form will go here
            </Box>
         </Container>
      </Box>
   );
};

export default Login;
