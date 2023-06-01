import React from 'react';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import { Outlet } from 'react-router-dom';
const Layout = () => {
  return (
    <div>
      <NavBar/>
      <div className="container-fluid">

      <Outlet></Outlet>
      </div>
      <Footer/>
    </div>
  );
}

export default Layout;
