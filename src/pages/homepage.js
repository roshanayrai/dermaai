import React from 'react';
import "./Homepage.css"
const Homepage = () =>{
    return(
        <>
        <div className="section1">
         <div className='section1text'>
            <h1>Get answers to your skin condition questions with DermaAI</h1>
            <p>Aysa is the easy-to-use app for concerns about common skin conditions. Powered by VisualDx, Aysa provides personalized guidance and helpful information to aid in your discussion with your healthcare provider.</p>
         </div>
         <div className='section1img'>
         <img src="homepage1.png" />
         </div>
        </div>
        <div className="section2">
         <div className='section2text'>
            <h1>Are you a part of our community yet? Join today and use our AI Skin tools without a hitch.</h1>
         </div>
         <div className="registernow"><button className="button">Register Now</button></div>
         </div>
        <div className="section3">
        <div className='section3img'>
         <img src="homepage2.png" />
         </div>
         <div className='section3text'>
            <h1>We bring you the top-notch Skin Issue Identification tool!</h1>
            <p>Get to know your skin better with our advanced Skin Issue Identification tool! Learn more about your skin concerns.</p>
            <div className="registernow"><button className="button"> Check it out</button></div>
         </div>
         <div className="section3">
        <div className='section3img'>
         <img src="homepage2.png" />
         </div>
         <div className='section3text'>
            <h1>We bring you the top-notch Skin Issue Identification tool!</h1>
            <p>Get to know your skin better with our advanced Skin Issue Identification tool! Learn more about your skin concerns.</p>
            <div className="registernow"><button className="button"> Check it out</button></div>
         </div>
        </div>
        </>
    );
}

export default Homepage;
