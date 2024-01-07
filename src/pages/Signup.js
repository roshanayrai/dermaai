import React from 'react';
import './Login.css';

function Signup() {
 return (
    <div className="App">  
      <h1>Account Registration</h1>
      <h3>Enter required details to proceed</h3>
      <div className="login">
      <div className="login-container">
        <form>
          <br></br>
        <label htmlFor="fname">First Name*</label>
          <input type="fname" id="fname" required />
          <br></br>
        <label htmlFor="lname">Last Name*</label>
          <input type="lname" id="lname" required />
          <br></br>
          <label htmlFor="email">Email*</label>
          <input type="email" id="email" required />
          <br></br>
          <label htmlFor="cno">Contact Number*</label>
          <input type="cno" id="cno" required />
          <br></br>
          <label htmlFor="password">Password*</label>
          <input type="password" id="password" required />
          <br></br>
          <label htmlFor="cnfrmpass">Confirm Password*</label>
          <input type="cnfrmpass" id="cnfrmpass" required />
          <br></br>
          <br></br>
          <button type="submit">Sign In</button>
        </form>
      </div>

      </div>
    </div>
 );
}

export default Signup;
