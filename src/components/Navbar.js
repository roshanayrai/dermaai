import React from 'react';
import "./Navbar.css"
import {Link} from 'react-router-dom';

const Navbar = () =>{
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <Link to="/Homepage" className='logo-link'><h1>DERMA AI</h1></Link>
          <div className="signin">
           <Link to="/Login"><img className="signinimg" src="signin.png" /></Link></div>
        </div>
      </div>
      <div className="mainmenu">
      <ul>
        <li><a href="#home">About Us</a></li>
        <li><a href="#about">Tools</a></li>
        <li><a href="#services">Blog</a></li>
        <li><a href="#contact">Contact</a></li>
    </ul>
      </div>
    </nav>
 
  )};


export default Navbar;
