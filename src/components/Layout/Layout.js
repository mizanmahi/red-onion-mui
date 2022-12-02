import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header/Header';

const Layout = () => {
   return (
      <div>
         <Header />
         <Outlet />
         <h1>FOOTER</h1>
      </div>
   );
};

export default Layout;
