import React from 'react';
import FoodCategory from '../../components/FoodCategory/FoodCategory';
import HeroSection from '../../components/HeroSection/HeroSection';
import { Stack } from '@mui/material';
import Features from '../../components/Features/Features';

const Home = () => {
   return (
      <Stack spacing={10}>
         <HeroSection />
         <FoodCategory />
         <Features />
      </Stack>
   );
};

export default Home;
