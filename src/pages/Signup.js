import React from 'react';
import './Signup.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SkinProfileCreation from './SkinProfileCreation';
import { Link } from 'react-router-dom';
function Signup() {
  return (
    <div className="Signup">
      <Navbar></Navbar>
      <div className="signuptext">
        <h1>Account Registration</h1>
        <h3>Enter required details to proceed</h3>
      </div>
      <div className="signup">
        <div className="signup-container">
          <form>
            <br></br>
            <div className='section1'>
              <div className="input-group">
                <label htmlFor="fname">First Name*</label>
                <input className="fname" type="text" id="fname" required />
              </div>
              <div className="input-group">
                <label htmlFor="lname">Last Name*</label>
                <input className="lname" type="text" id="lname" required />
              </div>
            </div>
            <br></br>
            <div className='section1'>
              <div className="input-group">
                <label htmlFor="email">Email*</label>
                <input className="email" type="email" id="email" required />
              </div>
              <div className="input-group">
                <label htmlFor="cno">Contact Number*</label>
                <input className="cno" type="text" id="cno" required />
              </div>
            </div>
            <div className='section1'>
              <div className="input-group">
                <label htmlFor="password">Password*</label>
                <input className="password" type="password" id="password" required />
              </div>
              <div className="input-group">
                <label htmlFor="cnfrmpass">Confirm Password*</label>
                <input className="cnfrmpass" type="password" id="cnfrmpass" required />
              </div>
            </div>
            <br></br>
            <Link to="/createSkinProfile">
  <button className="btn">Sign Up</button>
</Link>
          </form>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Signup;
