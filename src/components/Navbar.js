import React from 'react';
import "./Navbar.css"
import {Link} from 'react-router-dom';

const Navbar = () =>{
  return (
      <nav>
      <img src="C:\Users\hp\Documents\GitHub\dermaai\public\logo.png" class="logo"/>
      <ul>
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
      <img src="C:\Users\hp\Documents\GitHub\dermaai\public\pficon.png" class="pficon" onclick="toggleMenu()"/>

      <div class="sub-menu-wrap" id="subMenu">
          <div class="sub-menu">

              <a href="#" class="sub-menu-link">
                  <img src="C:\Users\hp\Documents\GitHub\dermaai\public\profile.png" alt=""/>
                  <p>Edit Profile</p>
                  <span>&gt</span>
              </a>
              <a href="#" class="sub-menu-link">
                  <img src="C:\Users\hp\Documents\GitHub\dermaai\public\setting.png" alt=""/>
                  <p>Settings & Privacy</p>
                  <span>&gt</span>
              </a>
              <a href="#" class="sub-menu-link">
                  <img src="C:\Users\hp\Documents\GitHub\dermaai\public\help.png" alt=""/>
                  <p>Help & Support</p>
                  <span>&gt</span>
              </a>
              <a href="#" class="sub-menu-link">
                  <img src="C:\Users\hp\Documents\GitHub\dermaai\public\logout.png" alt=""/>
                  <p>Logout</p>
                  <span>&gt</span>
              </a>
          </div>
      </div>
    </nav>
  )};


export default Navbar;
