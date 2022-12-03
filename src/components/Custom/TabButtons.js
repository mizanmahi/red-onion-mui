import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { styled } from '@mui/material';

const CustomTabs = styled(Tabs)(({ theme }) => ({
   borderRadius: '15px',
   padding: '5px',

   '& .MuiTabs-flexContainer': {
      justifyContent: 'space-between',
   },
   '& .MuiTab-root': {
      textTransform: 'capitalize',
      border: '1px solid transparent',
      color: '#000',
      '&:hover': {
         color: theme.palette.primary.main,
         borderRadius: '15px',
      },
   },
   '& .Mui-selected': {
      borderRadius: '15px',
   },
}));

export default function TabButtons({ value, setValue }) {
   const handleChange = (event, newValue) => {
      setValue(newValue);
   };

   return (
      <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
         <CustomTabs value={value} onChange={handleChange} centered>
            <Tab label='Breakfast' />
            <Tab label='Lunch' />
            <Tab label='Dinner' />
         </CustomTabs>
      </Box>
   );
}
