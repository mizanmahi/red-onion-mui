import React from 'react';
import { Avatar, Box, Container } from '@mui/material';
import Typography from '@mui/material/Typography';
import { FlexBox } from '../../components/styled/FlexBox';
import Button from '@mui/material/Button';

// stepper imports
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';

const steps = [
   {
      label: 'Your Location',
      description: `159/a, Khilgaon, Dhaka`,
   },
   {
      label: 'Shop Address',
      description:
         'An ad group contains one or more ads which target a shared set of keywords.',
   },
];
const OrderStatus = () => {
   return (
      <Box my={8}>
         <Container maxWidth='lg'>
            <FlexBox justifyContent='space-between'>
               <Box
                  sx={{
                     width: '100%',
                     maxWidth: '500px',
                     borderRadius: 1,
                     overflow: 'hidden',
                  }}
               >
                  <img
                     src='https://i.ibb.co/tMqhPdK/map.jpg'
                     alt='map'
                     style={{ width: '100%' }}
                  />
               </Box>
               <Box
                  sx={{
                     bgcolor: '#f5f5f5',
                     borderRadius: 1,
                     p: 4,
                  }}
               >
                  <img
                     src='https://i.ibb.co/MRYPhq8/Group-1151.png'
                     alt='bike'
                     style={{
                        width: 100,
                        margin: '0 auto',
                     }}
                  />

                  <Box
                     sx={{
                        width: '100%',
                        maxWidth: '350px',
                        borderRadius: 1,
                        bgcolor: '#ffffff',
                        p: 2,
                        my: 2,
                     }}
                  >
                     <Stepper orientation='vertical'>
                        {steps.map((step, index) => (
                           <Step
                              key={step.label}
                              completed={true}
                              expanded={true}
                           >
                              <StepLabel
                                 optional={
                                    index === 2 ? (
                                       <Typography variant='caption'>
                                          Last step
                                       </Typography>
                                    ) : null
                                 }
                              >
                                 {step.label}
                              </StepLabel>
                              <StepContent>
                                 <Typography color='primary.greyText'>
                                    {step.description}
                                 </Typography>
                              </StepContent>
                           </Step>
                        ))}
                     </Stepper>
                  </Box>

                  <Typography variant='h6'>09:00</Typography>
                  <Typography color='primary.greyText' variant='caption'>
                     Estimated delivery time
                  </Typography>

                  <FlexBox
                     sx={{
                        maxWidth: '350px',
                        width: '100%',
                        borderRadius: 1,
                        bgcolor: '#ffffff',
                        gap: 2,
                        p: 2,
                        mt: 2,
                     }}
                  >
                     <Avatar
                        alt='Remy Sharp'
                        src='https://i.ibb.co/fFW0d9b/happy-young-asian-delivery-man-red-uniform-medical-face-mask-protective-gloves-carry-cardboard-box-h.jpg'
                        sx={{ width: 56, height: 56 }}
                     />
                     <Box>
                        <Typography variant='h6'>Your Rider</Typography>
                        <Typography color='primary.greyText' variant='body2'>
                           Mr Hero
                        </Typography>
                     </Box>
                  </FlexBox>

                  <Button fullWidth sx={{mt: 3, borderRadius: '4px'}}  >Contact</Button>
               </Box>
            </FlexBox>
         </Container>
      </Box>
   );
};

export default OrderStatus;
