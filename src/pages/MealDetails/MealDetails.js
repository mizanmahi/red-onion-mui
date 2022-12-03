import React, { useState } from 'react';
import { FlexBox } from '../../components/styled/FlexBox';
import { Box, Container, Stack, Typography, Button } from '@mui/material';
import { useParams } from 'react-router-dom';
import useMealById from '../../hooks/useMealsById';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { CounterBox } from './mealDetails.style';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import ImageSLider from '../../components/ImageSLider/ImageSLider';
import { useCart } from '../../hooks/useCart';

const MealDetails = () => {
   const { mealId } = useParams();

   const { meal, loading } = useMealById(mealId);
   const { setCart } = useCart();

   const [quantity, setQuantity] = useState(0);

   if (loading) return <h2>Loading</h2>;

   const addToCartHandler = () => {
      setCart((cart) => [
         ...cart,
         {
            ...meal,
            quantity,
         },
      ]);
   };

   const adjustQuantity = (type) => {
      setQuantity(type === 'add' ? quantity + 1 : quantity - 1);
      setCart((cart) =>
         cart.map((item) => {
            if (item._id === meal._id) {
               return {
                  ...item,
                  quantity:
                     type === 'add' ? item.quantity + 1 : item.quantity - 1,
               };
            }

            return item;
         })
      );
   };

   return (
      <Box>
         <Container>
            <FlexBox sx={{ my: 5, gap: 10 }}>
               {/*  meal details will go here */}
               <Box sx={{ flex: 1 }}>
                  <Stack spacing={4}>
                     <Typography variant='h4' fontWeight={600}>
                        {meal.title}
                     </Typography>
                     <Typography
                        variant='body'
                        color='primary.greyText'
                        sx={{
                           width: 450,
                        }}
                     >
                        {meal.description}
                     </Typography>
                     <FlexBox>
                        <Typography variant='h4' fontWeight={400}>
                           ${meal.price}
                        </Typography>

                        <CounterBox>
                           <AddIcon onClick={() => adjustQuantity('add')} />
                           <Typography
                              variant='h5'
                              sx={{ width: '20px' }}
                              fontWeight={600}
                           >
                              {quantity}
                           </Typography>
                           <RemoveIcon onClick={() => adjustQuantity('remove')}  />
                        </CounterBox>
                     </FlexBox>

                     <Button
                        startIcon={<ShoppingCartOutlinedIcon />}
                        sx={{
                           width: ['100%', '100%', '40%'],
                        }}
                        onClick={addToCartHandler}
                     >
                        Add
                     </Button>
                  </Stack>

                  {/* slider */}
                  <Box mt={10}>
                     <ImageSLider images={meal.images} />
                  </Box>
               </Box>

               {/* image will go here */}
               <Box sx={{ flex: 1 }}>
                  <img
                     src={meal.defaultImage}
                     alt='meal'
                     style={{
                        maxWidth: '100%',
                        width: '500px',
                        margin: '0 auto',
                        display: 'block',
                     }}
                  />
               </Box>
            </FlexBox>
         </Container>
      </Box>
   );
};

export default MealDetails;
