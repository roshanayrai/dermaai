import React from 'react';
import "./Navbar.css"
import {Link} from 'react-router-dom';
import Login from '../pages/Login';
import Homepage from '../pages/Homepage';

const Navbar = () =>{
  return (
      <div className='nav'>
      <Link to='/Homepage'><img src="logo.png" class="logo"/></Link>
      <ul className='menu'>
        <li><a href="#">About Us</a></li>
        <div class="dropdown">
          <li><a href="#">Tools</a></li>
          <div class="dropdown-content">
            <a href="#">Skin Issue Identification</a>
            <a href="#">Ingredient Analysis</a>
            <a href="#">Weather API Recommendation</a>
          </div>
        </div>
        <li><a href="#">News/Blogs</a></li>
        <li><a href="#">Contact Us</a></li>
      </ul>
      <Link to="/Login"><img src="pficon.png" class="pficon" onclick="toggleMenu()"/></Link>

      <div class="sub-menu-wrap" id="subMenu">
          <div class="sub-menu">

              <a href="#" class="sub-menu-link">
                  <img src="profile.png" alt=""/>
                  <p>Edit Profile</p>
                  <span>&gt</span>
              </a>
              <a href="#" class="sub-menu-link">
                  <img src="setting.png" alt=""/>
                  <p>Settings & Privacy</p>
                  <span>&gt</span>
              </a>
              <a href="#" class="sub-menu-link">
                  <img src="C:\Users\hp\Documents\GitHub\dermaai\public\help.png" alt=""/>
                  <p>Help & Support</p>
                  <span>&gt</span>
              </a>
              <a href="#" class="sub-menu-link">
                  <img src="C:\Users\hp\Documents\GitHub\dermaai\public\help.png" alt=""/>
                  <p>Edit Skin Profile</p>
                  <span>&gt</span>
              </a>
              <a href="#" class="sub-menu-link">
                  <img src="C:\Users\hp\Documents\GitHub\dermaai\public\logout.png" alt=""/>
                  <p>Logout</p>
                  <span>&gt</span>
              </a>
          </div>
      </div>
    </div>
  )};


export default Navbar;