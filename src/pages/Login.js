import React from 'react';
import './Login.css';

function App() {
 return (
    <div className="App">
    <div className="navbar">
     <a href="#" class="right">DermaAI</a>
     <a href="#">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a>
        <a href="#">Contact Us</a>
        <a href="#">News/Blogs</a>
        <div class="dropdown">
  <button class="dropbtn">tools
  <i class="fa fa-caret-down"></i>
  </button>
  <div class="dropdown-content" id="myDropdown">
    <a href="#">Link 1</a>
    <a href="#">Link 2</a>
    <a href="#">Link 3</a>
  </div>
  </div> 
        <a href="#">About Us</a>
      </div>
      
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
        </form>
      </div>

      </div>
    </div>
 );
}

export default App;
