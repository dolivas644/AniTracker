import React from 'react';
import Logo from './Logo.png'
import AuthNav from './auth-nav';
import './nav.css'

const NavBar = () => {
  return (
    <>
    <div className="nav-container mb-3">
      <nav className="navbar navbar-expand-md navbar-light bg-light">
        <div className="container">
          <div className="navbar-brand logo" />
          <div className='topNav'>
            <div className='floatLeft'>
            <img src={Logo}></img>
            </div>
          <div className='floatRight'><AuthNav /></div>

          </div>
          
        </div>
      </nav>
    </div>
    </>
  );
};

export default NavBar;