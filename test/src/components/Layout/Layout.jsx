import React from 'react';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import { Outlet } from 'react-router-dom';
const Layout = () => {
  return (
    <div>
      <NavBar/>
      <Outlet></Outlet>
      <Footer/>
    </div>
  );
}

export default Layout;
