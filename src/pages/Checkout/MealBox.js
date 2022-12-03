import React from 'react';
import { FlexBox } from '../../components/styled';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import {  Typography, Stack } from '@mui/material';
import { CounterBox } from '../MealDetails/MealDetails';
import { useCart } from '../../hooks/useCart';

const MealBox = ({ meal }) => {
   const { setCart } = useCart();

   const adjustQuantity = (type) => {
      // setQuantity(type === 'add' ? quantity + 1 : quantity - 1);
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
      <FlexBox
         sx={{
            width: '100%',
            bgcolor: '#f5f5f5',
            py: 1.5,
            pl: 1,
            pr: 2,
            gap: 2,
            borderRadius: 3,
            mb: 2
         }}
      >
         <img src={meal.defaultImage} alt='meal' style={{ width: '110px' }} />
         <Stack spacing={0.5}>
            <Typography fontWeight={600}>{meal.title}</Typography>
            <Typography color='primary' variant='h5' fontWeight={600}>
               ${meal.price}
            </Typography>
            <Typography color='primary.greyText' variant='body2'>
               Delivery Free
            </Typography>
         </Stack>
         <CounterBox>
            <RemoveIcon onClick={() => adjustQuantity('remove')} />
            <Typography variant='h5' sx={{ width: '20px' }} fontWeight={600}>
               {meal?.quantity}
            </Typography>

            <AddIcon onClick={() => adjustQuantity('add')} />
         </CounterBox>
      </FlexBox>
   );
};

export default MealBox;
