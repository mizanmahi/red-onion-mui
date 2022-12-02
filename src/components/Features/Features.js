import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';

// icons
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import FeatureCard from '../FeatureCard/FeatureCard';
// import FeatureCard from '../FeatureCard/FeatureCard';

const featuresCardData = [
   {
      title: 'Fast delivery',
      description:
         'Red Onion is a simple service to order food from a variety of restaurants online. Enjoy different cuisines and flavours delivered to your door step.',
      image: 'https://i.ibb.co/cc8nQbw/adult-blur-blurred-background-687824.png',
      icon: DirectionsBusIcon,
   },
   {
      title: 'A good auto responder',
      description:
         'Red Onion is a simple service to order food from a variety of restaurants online. Enjoy different cuisines and flavours delivered to your door step.',
      icon: LocalShippingIcon,
      image: 'https://i.ibb.co/hMBwzGR/chef-cook-food-33614.png',
   },
   {
      image: 'https://i.ibb.co/fxnVgRS/architecture-building-city-2047397.png',
      title: 'Home Delivery',
      description:
         'Red Onion is a simple service to order food from a variety of restaurants online. Enjoy different cuisines and flavours delivered to your door step.',
      icon: NotificationsActiveIcon,
   },
];

const Features = () => {
   return (
      <Box
         sx={{
            width: '100%',
         }}
      >
         <Container>
            <Typography variant='h4'>Why choose us?</Typography>
            <Typography
               variant='body2'
               sx={{
                  width: '500px',
                  mt: 3,
               }}
            >
               Are you hungry? Did you have a long and stressful day? Interested
               in getting a cheesy pizza delivered to your office or home? Then
               we are here to help.
            </Typography>
            <Box
               sx={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(345px, 1fr))',
                  gap: '1rem',
                  justifyItems: 'center',
                  alignItems: 'flex-start',
                  mt: 8,
               }}
            >
               {featuresCardData.map((feature) => (
                  <FeatureCard feature={feature} />
               ))}
            </Box>
            <Button
               sx={{
                  borderRadius: '4px',
               }}
            >
               Checkout Your Food
            </Button>
         </Container>
      </Box>
   );
};

export default Features;
