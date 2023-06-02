import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../Navbar/NavBar';
import Footer from '../Footer/Footer';
const Layout = () => {
  return   <>
      <NavBar></NavBar>
      <div className="container">
      <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </>
  
}

export default Layout;
