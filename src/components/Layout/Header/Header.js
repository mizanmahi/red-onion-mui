import React from 'react';
import { Container, Box, IconButton, Button, Stack } from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { FlexBox } from '../../styled/FlexBox';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../../hooks/useAuth';
import LogoutIcon from '@mui/icons-material/Logout';
import { useCart } from '../../../hooks/useCart';
import Badge from '@mui/material/Badge';

const Header = () => {
   const { user, logoutUser } = useAuth();
   const { cart } = useCart();
   console.log(cart);

   console.log(user);

   const handleLogout = () => {
      logoutUser();
   };
   const navigate = useNavigate();

   return (
      <div>
         <Container>
            <FlexBox
               justifyContent='space-between'
               sx={{
                  padding: '2rem 0',
               }}
            >
               <Box to='/' component={Link}>
                  <img
                     alt='Logo'
                     src='https://i.ibb.co/GV0gqff/logo2.png'
                     style={{
                        width: '160px',
                     }}
                  />
               </Box>

               <Stack
                  direction='row'
                  spacing={4}
                  sx={{
                     alignItems: 'center',
                  }}
               >
                  <Badge
                     badgeContent={cart?.reduce(
                        (acc, curr) => (acc += curr.quantity),
                        0
                     )}
                     color='primary'
                     onClick={() => navigate('/checkout')}
                     sx={{
                        cursor: 'pointer',
                        '&:hover  svg': {
                           color:'primary.main',
                        },
                     }}
                  >
                     <ShoppingCartOutlinedIcon />
                  </Badge>

                  {!user && (
                     <>
                        <Button
                           variant='text'
                           sx={{ color: '#191919' }}
                           to='/login'
                           component={Link}
                        >
                           Sign In
                        </Button>
                        <Button to='/register' component={Link}>
                           Sign Up
                        </Button>
                     </>
                  )}

                  {user && (
                     <>
                        <Button variant='text' sx={{ color: '#191919' }}>
                           {user.displayName}
                        </Button>
                        <IconButton onClick={handleLogout}>
                           <LogoutIcon />
                        </IconButton>
                     </>
                  )}
               </Stack>
            </FlexBox>
         </Container>
      </div>
   );
};

export default Header;
