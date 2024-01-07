import React from 'react';
import "./Homepage.css"
const Homepage = () =>{
    return(
        <>
        <div className="section1">
         <div className='maintext'>
            <h1>Get answers to your skin condition questions with DermaAI</h1>
            <p>Aysa is the easy-to-use app for concerns about common skin conditions. Powered by VisualDx, Aysa provides personalized guidance and helpful information to aid in your discussion with your healthcare provider.</p>
         </div>
         <div className='section1img'>
         <img src="homepage1.png" />
         </div>
        </div>
        <div className="section2">
         <div className='maintext'>
            <h1>Are you a part of our community yet? Join today and use our AI Skin tools without a hitch.</h1>
         </div>
         
         <button className="button">Register Now</button>
         </div>
        
        </>
    );
}

export default Homepage;
