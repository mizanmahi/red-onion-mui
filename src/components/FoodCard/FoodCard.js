import React from 'react';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const FoodCard = ({ meal }) => {
   // const navigate = useNavigate();
   return (
      <Box
         sx={{
            width: '100%',
            maxWidth: '350px',
            padding: '30px 20px',
            borderRadius: '10px',
            '&:hover': {
               cursor: 'pointer',
               boxShadow:
                  'rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px',
            },
         }}
         // onClick={() => navigate(`/meal-details/${meal._id}`)}
      >
         <Box
            sx={{
               mb: 3,
               width: '80%',
               margin: '0 auto',
            }}
         >
            <img
               src={meal.defaultImage}
               alt='breakfast'
               style={{
                  width: '100%',
               }}
            />
         </Box>
         <Box>
            <Typography
               sx={{
                  fontWeight: 'bold',
                  textAlign: 'center',
               }}
               variant='h6'
            >
               {meal?.title}
            </Typography>
            <Typography
               sx={{
                  textAlign: 'center',
                  color: '#8D8D8D',
               }}
            >
               {meal.description.length > 50
                  ? meal?.description.slice(0, 50) + '...'
                  : meal.description}
            </Typography>
            <Typography
               sx={{
                  textAlign: 'center',
                  mt: 2,
               }}
               variant='h5'
            >
               ${meal.price}
            </Typography>
         </Box>
      </Box>
   );
};

export default FoodCard;
