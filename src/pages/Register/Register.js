import React from 'react';
import { Box, Button, Container, Typography, TextField } from '@mui/material';
import icon2 from '../../assets/icon-2.png';
import icon4 from '../../assets/icon-4.png';
import icon5 from '../../assets/icon-5.png';
import icon6 from '../../assets/icon-6.png';
import { AuthForm } from './register.style';
import OnionTextField from '../../components/Custom/OnionTextField';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

const Register = () => {
   const {
      register,
      handleSubmit,
      reset,
      formState: { errors },
   } = useForm();

   const { registerWithEmailAndPassword } = useAuth();
   const navigate = useNavigate();

   const handleRegister = async ({ name, email, password }) => {
      await registerWithEmailAndPassword(name, email, password, navigate);
      reset();
   };

   return (
      <Box
         sx={{
            height: '90vh',
            width: '100%',
            position: 'relative',
            overflow: 'hidden',
         }}
      >
         <Container>
            <AuthForm component='form' onSubmit={handleSubmit(handleRegister)}>
               <Typography variant='h3' color='primary' textAlign='center'>
                  Sign Up
               </Typography>
               <OnionTextField
                  placeholder='Name'
                  type='text'
                  {...register('name', {
                     required: {
                        value: true,
                        message: 'Name is required',
                     },
                  })}
                  error={errors.name}
                  helperText={errors.name && errors.name.message}
               />
               <OnionTextField
                  placeholder='Email'
                  {...register('email', {
                     pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                        message: 'Invalid email address',
                     },
                     required: {
                        value: true,
                        message: 'Email is required',
                     },
                  })}
                  error={errors.email}
                  helperText={errors.email && errors.email.message}
               />
               <OnionTextField
                  placeholder='Password'
                  type='password'
                  {...register('password', {
                     required: {
                        value: true,
                        message: 'Please input a password',
                     },
                     minLength: {
                        value: 6,
                        message: 'Password must be at least 6 characters long',
                     },
                  })}
                  error={errors.password}
                  helperText={errors.password && errors.password.message}
               />

               <Link
                  to='/login'
                  style={{
                     color: '#f91944',
                  }}
               >
                  Already have an account?
               </Link>
               <Button
                  sx={{
                     borderRadius: '8px',
                  }}
                  type='submit'
               >
                  Sign Up
               </Button>
            </AuthForm>
         </Container>
      </Box>
   );
};

export default Register;
