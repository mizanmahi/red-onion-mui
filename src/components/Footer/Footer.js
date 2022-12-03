import React from 'react';
import { Box, Container, styled, Typography } from '@mui/material';
import Link from '@mui/material/Link';
import { FlexBox } from '../styled/FlexBox';

const MenuBox = styled(Box)(({ theme }) => ({
   display: 'flex',
   flexDirection: 'column',
   gap: 1,
   a: {
      color: '#ffffff',
      textDecoration: 'none',
   },
}));

const Footer = () => {
   return (
      <Box
         sx={{
            bgcolor: 'primary.mainBg',
            py: 8,
         }}
      >
         <Container>
            <FlexBox justifyContent='space-between'>
               <img
                  src='https://i.ibb.co/PMXgjTz/logo.png'
                  alt='logo'
                  style={{ width: 150 }}
               />
               <FlexBox
                  sx={{ width: ['70%', '70%', '40%'] }}
                  justifyContent='space-between'
               >
                  <MenuBox component='ul' mr={2}>
                     <Link>About Online Food</Link>
                     <Link>Read Our Blog</Link>
                     <Link>Sign up to deliver</Link>
                     <Link>Add your restaurant</Link>
                  </MenuBox>
                  <MenuBox>
                     <Link>Get help</Link>
                     <Link>Read FAQs</Link>
                     <Link>View all cities</Link>
                     <Link>Restaurants near me</Link>
                  </MenuBox>
               </FlexBox>
            </FlexBox>
            <FlexBox justifyContent='space-between' mt={6}>
               <Typography color='primary.greyText'>
                  Copyright &copy; 2022 Online Food
               </Typography>
               <FlexBox
                  sx={{
                     a: {
                        color: '#ffffff',
                        textDecoration: 'none',
                        '&:not(:last-child)': {
                           mr: 3,
                        },
                     },
                  }}
               >
                  <Link>Read FAQs</Link>
                  <Link>View all cities</Link>
                  <Link>Restaurants near me</Link>
               </FlexBox>
            </FlexBox>
         </Container>
      </Box>
   );
};

export default Footer;
