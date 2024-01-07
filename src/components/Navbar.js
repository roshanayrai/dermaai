import React from 'react';
import "./Navbar.css"

const Navbar = () =>{
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <h1>DERMA AI</h1>
          <div className="signin">
           <img className="signinimg" src="signin.png" /></div>
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
