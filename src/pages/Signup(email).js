import React from 'react';
import './Login.css';

function Signup(email)() {
 return (
    <div className="App">
      <h1>Account Registration</h1>
      <h3>Enter required details to proceed</h3>
      <div className="login">
      <div className="login-container">
        <form>
          <br></br>
          <h3>A code was sent to your email. Enter the code below for verification.</h3>
          <br></br>
          <br></br>
          <input type="code" id="code" required />
          <br></br>
          <br></br>
          <br></br>
          <button type="confirm">Confirm</button>
        </form>
      </div>

      </div>
    </div>
 );
}

export default Signup(email);
