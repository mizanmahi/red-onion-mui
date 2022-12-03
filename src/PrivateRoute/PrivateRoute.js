import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

const PrivateRoute = ({ children, ...rest }) => {
   const { user, userLoading } = useAuth();
   const location = useLocation();

   if (userLoading)
      return (
         <>
            <h2>Loading...</h2>
         </>
      );

   if (user) return children;

   return <Navigate to='/login' state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;
