import React from 'react';
import {
   Box,
   Button,
   Container,
   Divider,
   Stack,
   Typography,
} from '@mui/material';
import { FlexBox } from '../../components/styled/FlexBox';


const Checkout = () => {
   return (
      <Box sx={{ my: 8 }}>
         <Container maxWidth='lg'>
            <FlexBox
               justifyContent='space-between'
               sx={{
                  flexDirection: ['column-reverse', 'column-reverse', 'row'],
               }}
            >
               {/* details form */}
               <Box sx={{ width: '100%', maxWidth: '500px' }}>
                  <Typography variant='h5'>Enter Delivery Details</Typography>
                  <Divider sx={{ mt: 1, mb: 3 }} />
               </Box>

               {/* meal details */}
               <Box sx={{ mb: [2, 2, 0] }}>
                  <Stack spacing={2}>
                     <Typography variant='h6'>
                        <strong>From: </strong> Hero Cafe
                     </Typography>
                     <Typography variant='h6'>
                        <strong>Arriving: </strong> in 20 - 30 mins
                     </Typography>
                     <Typography variant='h6'>
                        <strong>Road: </strong> 107/a
                     </Typography>
                  </Stack>
               </Box>
            </FlexBox>
         </Container>
      </Box>
   );
};

export default Checkout;
