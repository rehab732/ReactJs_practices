import React from 'react';
import {Link} from 'react-router-dom';
const NavBar = () => {
  return <nav className='p-2 flex-md-row flex-column d-flex justify-content-between'>
    <div className='left-nav flex-md-row flex-column d-flex m-0 align-items-center'>
          <h1 className='pe-3'>Noxe</h1>
          <ul className='list-unstyled d-flex flex-md-row flex-column m-0 align-items-center'>
            <li className='px-2 '><Link to="home">Home</Link></li>
            <li className='px-2'><Link to="about">About</Link></li>
            <li className='px-2'><Link to="movies">Movies</Link></li>
            <li className='px-2'><Link to="tv">TV-Show</Link></li>
            <li className='px-2'><Link to="people">People </Link></li>

          </ul>
    </div>
    <div className='right-nav flex-md-row flex-column d-flex m-0 align-items-center'>
      <div className="social-media">
        <i className='fab mx-1 fa-facebook'></i>
        <i className='fab mx-1 fa-instgram'></i>
        <i className='fab mx-1 fa-twitter'></i>
        <i className='fab mx-1 fa-youtube'></i>
        <i className='fab mx-1 fa-spotify'></i>



        
      </div>
          <ul className='list-unstyled d-flex flex-md-row flex-column m-0 align-items-center'>
            <li className='px-2 '><Link to="login">Login</Link></li>
            <li className='px-2'><Link to="">Register</Link></li>
            <li className='px-2'><span >Logout</span></li>

          </ul>
    </div>
  </nav>
}

export default NavBar;
