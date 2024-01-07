import React from 'react';
import "./Navbar.css"
const Navbar = () =>{
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <h1>DERMA AI</h1>
          <div className="signin">
            <img src="signin.png" />
          </div>
        </div>
    <ul class="navbarmenu">
      <li class="nav-item"><a href="#" class="nav-link">Home</a></li>
      <li class="nav-item"><a href="#" class="nav-link">About</a></li>
      <li class="nav-item"><a href="#" class="nav-link">Services</a></li>
      <li class="nav-item"><a href="#" class="nav-link">Contact</a></li>
    </ul>
      </div>
    </nav>
  );
};

export default Navbar;