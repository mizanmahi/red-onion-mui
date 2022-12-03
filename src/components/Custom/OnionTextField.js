import React, { forwardRef } from 'react';
import { TextField, styled } from '@mui/material';

export const CustomTextField = styled(TextField)(({ theme }) => ({
   background: '#f5f5f5',
   borderRadius: theme.spacing(1),
   '&. .MuiOutlinedInput-root': {
      '& fieldset': {
         border: 'none !important',
      },
      '&:hover fieldset': {
         borderColor: theme.palette.primary.main,
      },
   },
   '& .MuiOutlinedInput-notchedOutline': {
      border: 'none',
   },
}));

const OnionTextField = (props, ref) => {
   return <CustomTextField id='outlined-basic' {...props} inputRef={ref} />;
};

export default forwardRef(OnionTextField);
