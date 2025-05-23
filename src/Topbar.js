

import React from 'react';
import logo from './assest/arrogya_health_clinic-logo.jpg';

const Topbar = () => {
  return (
    <div className='topbar'>
      <div className='navbar'>
        <div className='navbar-firstDiv'>
          <img className='navbar-firstDiv-img' src={logo} alt="Logo" />
        </div>
        <ul className='navbar-div-ul'>
          <li><a className='navbar-div-ul-li-a' href="#home">Home</a></li>
          <li><a className='navbar-div-ul-li-a' href="#services">About Arrogyam</a></li>
          <li><a className='navbar-div-ul-li-a' href="#about">Health care Services</a></li>
          <li><a className='navbar-div-ul-li-a' href="#testimonial">Social Activity</a></li>
          <li><a className='navbar-div-ul-li-a' href="#education">Medical Education</a></li>
          <li><a className='navbar-div-ul-li-a' href="#career">Career</a></li>
          <li><a className='navbar-div-ul-li-a' href="#partner">Be A Partner</a></li>
          <li><a className='navbar-div-ul-li-a' href="#contact">Contact Us</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Topbar;
