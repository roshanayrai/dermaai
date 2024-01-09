import React from 'react';
import "./Homepage.css"
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Homepage = () =>{
    return(
        <>
        <div className='Homepage'><Navbar></Navbar></div>
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
         </div>
         
         <div className="section4">
         <div className='section4text'>
            <h1>UNSURE IF YOUR PRODUCT IS RIGHT FOR YOU?</h1>
            <p>Use our Ingredient Analysis tool and find out an in-depth analysis. No more uncertainty about what goes on to your face!</p>
            <div className="registernow"><button className="button"> Check it out</button></div>
         </div>
         <div >
         <img  className='section4img' src="homepage3.png" />
         </div>
        </div>
        <div className="section5">
         <div className='section5text'>
            <h1>CONFUSED ABOUT WHAT PRODUCTS ARE RIGHT FOR YOU?</h1>
            <p>Integrated within our Skin Issue Identification tool, our top-notch recommendation system gives you the best products for your skin. Affordability, Accessibility, and Effectiveness all in one place!</p>
            <div className="registernow"><button className="button"> Ingredient Analysis</button></div>
         </div>
         <div >
         <img  className='section5img' src="homepage4.png" />
         </div>
        </div>
        <div className="section6">
        <div className='section6img'>
         <img src="homepage5.png" />
         </div>
         <div className='section6text'>
            <h1>For more serious concerns, go see a doctor right away!</h1>
            <p>For concerns that require immediate expert attention, our dermatologist recommendation system finds you the right doctors because there is no compromise when it comes to your skin health.</p>
         </div>
         </div>
         <div className="section7">
         <div className="section7text">
         <p>LATEST</p>
          <h1>NEWS AND LOGS</h1>
         </div>
         <div className='trends'>
    <div class='image-container'>
        <img className='section7img1' src="section7img1.png" alt="Trend 1" />
        <div class='image-text'>
            <p>Trends 2024</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
    </div>

    <div class='image-container'>
        <img className='section7img2' src="section7img2.png" alt="Trend 2" />
        <div class='image-text'>
            <p>Trends 2024</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
    </div>

    <div class='image-container'>
        <img className='section7img3' src="section7img3.png" alt="Trend 3" />
        <div class='image-text'>
            <p>Trends 2024</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
    </div>
</div>
    <div className='section8'>
        <h1>FOLLOW US ON GRAM</h1>
    <div className='instagramfeed'>
        <img className='section8img1' src="section8img1.png" />
        <img className='section8img2' src="section8img2.png"  />
        <img className='section8img3' src="section8img3.png" />
        <img className='section8img4' src="section8img4.png" />
    </div>
</div>
<Footer></Footer>
        </div>
        </>
    );
}

export default Homepage;
