import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Login.css';
import Navbar from '../components/Navbar';
import Signup from './Signup';
import Footer from '../components/Footer';
import { useNavigate, Link } from 'react-router-dom';


function Login() {

  const history = useNavigate();

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function submit(e) {
    e.preventDefault();

    try {

      await axios.post("http://localhost:8000/Login", {
        email, password
      })
        .then(res => {
          if (res.data == "exist") {
            history("/SkinProfileCreation")
          }
          else if (res.data == "notexist") {
            alert("User is not registered.")
          }
        })
        .catch(e => {
          alert("Either email or password is incorrect.")
          console.log(e);
        })

    }
    catch (e) {
      console.log(e);

    }

  }

  return (

    <div className="Loginpage">
      <Navbar></Navbar>
      <div className="logintext">
        <h1>Sign In to Your Account</h1>
        <h3>Enter required details to proceed</h3>
      </div>
      <div className="login">
        <div className="login-container">
          <form action="POST">
            <br></br>
            <label htmlFor="email">Email*</label>
            <input type="email" onChange={(e) => { setEmail(e.target.value) }} placeholder="Email" />
            <br></br>
            <label htmlFor="password">Password*</label>
            <input type="password" onChange={(e) => { setPassword(e.target.value) }} placeholder="Password" />
            <br></br>
            <br></br>
            <button className="submit" type="submit" onClick={submit}>Sign In</button>
            <div className="Signup"><p>Don't have an account?&nbsp;<Link to="/Signup" style={{ color: '#352F1A' }}>Sign Up</Link></p></div>
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
