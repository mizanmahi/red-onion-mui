import React from 'react';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Box, Typography } from '@mui/material';

const FeatureCard = ({ feature }) => {
   return (
      <Card
         sx={{
            maxWidth: 345,
            boxShadow: 'none',
            cursor: 'pointer',
            borderRadius: 5,
            p: 2,
            '&:hover': {
               boxShadow: 25,
            },
         }}
      >
         <CardMedia
            component='img'
            height='auto'
            image={feature.image}
            alt='green iguana'
         />
         <CardContent
            sx={{
               display: 'flex',
               justifyContent: 'center',
               alignItems: 'flex-start',
               gap: 1,
               pt: 2,
               '&:last-child': {
                  pb: 0,
               },
            }}
         >
            <Box
               sx={{
                  bgcolor: 'primary.main',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  p: 1,
                  borderRadius: '50%',
               }}
            >
               <feature.icon
                  sx={{
                     color: '#ffffff',
                  }}
               />
            </Box>
            <Box>
               <Typography gutterBottom variant='h6' component='div'>
                  {feature.title}
               </Typography>
               <Typography variant='body2' color='text.secondary'>
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
               </Typography>
               <Button
                  sx={{
                     mt: 3,
                  }}
                  endIcon={<ArrowForwardIcon />}
               >
                  See more
               </Button>
            </Box>
         </CardContent>
      </Card>
   );
};

export default FeatureCard;
