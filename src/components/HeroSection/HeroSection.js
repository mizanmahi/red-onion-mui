import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { HeroSectionWrapper, SearchBox } from './hero.style';

const HeroSection = () => {
   return (
      <HeroSectionWrapper>
         <Container
            sx={{
               height: '100%',
            }}
         >
            <Box
               sx={{
                  width: '100%',
                  height: '100%',
                  display: 'grid',
                  placeItems: 'center',
               }}
            >
               <Box
                  sx={{
                     width: '50%',
                  }}
               >
                  <Typography variant='h3' fontWeight={500} textAlign='center'>
                     Best Food Waiting For Your Belly
                  </Typography>

                  <SearchBox>
                     <input
                        type='search'
                        alt='Search Food'
                        placeholder='Search food'
                     />
                     <button>Search</button>
                  </SearchBox>
               </Box>
            </Box>
         </Container>
      </HeroSectionWrapper>
   );
};

export default HeroSection;
