import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import './Login.css';  // Import your existing CSS file

function Login() {
    const history = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function submit(e) {
        e.preventDefault();

        try {
            await axios.post("http://localhost:8000/login", {
                email,password
            })
                .then(res => {
                    if (res.data === "success") {
                        history("/SkinProfileCreation");
                    } else if (res.data === "notexist") {
                        alert("User has not signed up");
                    } else if (res.data === "invalidPassword") {
                      alert("Either email or password do not match.")
                    }
                })
                .catch(e => {
                    alert("Wrong details");
                    console.log(e);
                });
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <div className="login">
            <h1>Login</h1>
            <form action="POST">
                <div className="login-container">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" onChange={(e) => { setEmail(e.target.value) }} placeholder="Email" className="email" />

                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" onChange={(e) => { setPassword(e.target.value) }} placeholder="Password" className="password" />

                    <button type="submit" onClick={submit}>Submit</button>
                </div>
            </form>

            <br />
            <p>OR</p>
            <br />

            <Link to="/signup">Signup Page</Link>
        </div>
    );
}

export default Login;
