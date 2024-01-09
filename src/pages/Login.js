import React from 'react';
import './Login.css';
import Navbar from '../components/Navbar';
import Signup from './Signup';
import Footer from '../components/Footer';
import {Link} from 'react-router-dom';
function Login() {
 return (

    <div className="Loginpage">  
    <Navbar></Navbar>
    <div className="logintext">
      <h1>Sign In to Your Account</h1>
      <h3>Enter required details to proceed</h3>
      </div>
      <div className="login">
      <div className="login-container">
        <form>
        <br></br>
        <label htmlFor="email">Email*</label>
          <input className="email" type="email" id="email"  required />
          <br></br>
          <label htmlFor="password">Password*</label>
          <input className="password" type="password" id="password"  required />
          <br></br>
          <br></br>
          <button className="submit" type="submit">Sign In</button>
          <div className="Signup"><p>Don't have an account?&nbsp;<Link to ="/Signup" style={{ color: '#352F1A' }}>Sign Up</Link></p></div>
        </form>
      </div>
      <br></br>
      <br></br>
      </div>
     <Footer></Footer>    
    </div>
 );
}

export default Login;
