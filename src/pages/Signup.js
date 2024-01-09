import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import './Signup.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SkinProfileCreation from './SkinProfileCreation';

function Signup() {
  const history = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  async function submit(e) {
    e.preventDefault();

    try {
      await axios.post("http://localhost:8000/Signup", {
        email,
        password,
        firstName,
        lastName,
        contactNumber,
      })
        .then(res => {
          if (res.data === "exist") {
            alert("User already exists.");
          } else if (res.data === "notexist") {
            history("/SkinProfileCreation");
          }
        })
        .catch(err => {
          alert("Please recheck details.");
          console.log(err);
        });
    } catch (err) {
      console.log(err);
    }
  }

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
                <input
                  className="fname"
                  type="text"
                  id="fname"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                />
              </div>
              <div className="input-group">
                <label htmlFor="lname">Last Name*</label>
                <input
                  className="lname"
                  type="text"
                  id="lname"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                />
              </div>
            </div>
            <br></br>
            <div className='section1'>
              <div className="input-group">
                <label htmlFor="email">Email*</label>
                <input
                  className="email"
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="input-group">
                <label htmlFor="cno">Contact Number*</label>
                <input
                  className="cno"
                  type="text"
                  id="cno"
                  value={contactNumber}
                  onChange={(e) => setContactNumber(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className='section1'>
              <div className="input-group">
                <label htmlFor="password">Password*</label>
                <input
                  className="password"
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div className="input-group">
                <label htmlFor="cnfrmpass">Confirm Password*</label>
                <input
                  className="cnfrmpass"
                  type="password"
                  id="cnfrmpass"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </div>
            </div>
            <br></br>
            <button className="btn" onClick={submit}>Sign Up</button>
            <div className="Signup"><p>Already have an account?&nbsp;<Link to="/Login" style={{ color: '#352F1A' }}>Log In here</Link></p></div>
          </form>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Signup;