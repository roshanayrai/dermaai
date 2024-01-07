import React from 'react';
import './Login.css';

function Login() {
 return (
    <div className="Loginpage">  
      <h1>Sign In to Your Account</h1>
      <h3>Enter required details to proceed</h3>
      <div className="login">
      <div className="login-container">
        <form>
          <br></br>
        <label htmlFor="email">Email*</label>
          <input type="email" id="email" required />
          <br></br>
          <label htmlFor="password">Password*</label>
          <input type="password" id="password" required />
          <br></br>
          <br></br>
          <button type="submit">Sign In</button>
          <h3>Don't have an account then<button>SignUp</button></h3>
        </form>
      </div>

      </div>
    </div>
 );
}

export default Login;
