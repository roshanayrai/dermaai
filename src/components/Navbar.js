import React from 'react';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Login from '../pages/Login';
import Homepage from '../pages/Homepage';
import Ingredient from '../pages/Ingredient';
import SkinIT from '../pages/SkinI&T';
import Weather from '../pages/Weather';
import "./Navbar.css";

const Navbar = () => {
  // You can define the toggleMenu function if needed
  const toggleMenu = () => {
    // Your implementation here
  };

  return (
    <div className='nav'>
      <Link to='/'><img src="logo.png" className="logo" alt="Logo" /></Link>
      <ul className='menu'>
        <li><a href="#">About Us</a></li>
        <div className="dropdown">
          <li><a href="#">Tools</a></li>
          <div className="dropdown-content">
            <Link to="/SkinIT">Skin Issue Identification</Link>
            <Link to="/Ingredient">Ingredient Analysis</Link>
            <Link to="/Weather">Weather API Recommendation</Link>
          </div>
        </div>
        <li><a href="#">News/Blogs</a></li>
        <li><a href="#">Contact Us</a></li>
      </ul>
      <Link to="/login"><img src="pficon.png" className="pficon" alt="Profile" /></Link>

      <div className="sub-menu-wrap" id="subMenu">
        <div className="sub-menu">
          <a href="#" className="sub-menu-link">
            <img src="profile.png" alt="Edit Profile" />
            <p>Edit Profile</p>
            <span>&gt;</span>
          </a>
          <a href="#" className="sub-menu-link">
            <img src="setting.png" alt="Settings & Privacy" />
            <p>Settings & Privacy</p>
            <span>&gt;</span>
          </a>
          <a href="#" className="sub-menu-link">
            <img src="help.png" alt="Help & Support" />
            <p>Help & Support</p>
            <span>&gt;</span>
          </a>
          <a href="#" className="sub-menu-link">
            <img src="help.png" alt="Edit Skin Profile" />
            <p>Edit Skin Profile</p>
            <span>&gt;</span>
          </a>
          <a href="#" className="sub-menu-link">
            <img src="logout.png" alt="Logout" />
            <p>Logout</p>
            <span>&gt;</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
