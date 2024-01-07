import React from 'react';
import "./Footer.css"
const Footer = () =>{
  return (
    <div className="footer">
    <div className="navbar-container">
            <h1>DERMA AI</h1>
    </div>
    <div className="footer">
        <div className="social-icons">
            <a href="#" target="_blank"><img src="facebook-app-symbol.png" alt="Facebook" /></a>
            <a href="#" target="_blank"><img src="twitter.png" alt="Twitter" /></a>
            <a href="#" target="_blank"><img src="instagram.png" alt="Instagram" /></a>
        </div>
    </div>
    <div className="subscribe">
        <form action="#" method="post"> 
            <input type="email" name="email" placeholder="Subscribe to our newsletter" />
            <button type="submit">Subscribe</button>
        </form>
    </div>
    <div className="copyright">
        <p>&copy; 2024 DERMA AI. All rights reserved.</p>
        </div>
      </div>
   
  )};


export default Footer;
