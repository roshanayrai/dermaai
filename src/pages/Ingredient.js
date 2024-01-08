import React from 'react';
import './Ingredient.css';

function Ingredient() {
 return (
    <div className="App">
      <h1>Ingredient Analysis</h1>
      <h3>Empower Your Skincare Choices: A Deep Dive into Ingredients for Healthier, Happier Skin!</h3>
      <p>Embark on a transformative journey towards healthier, happier skin with our revolutionary
         Ingredient Analysis Module. At the heart of our Skincare Empowerment Suite, this tool is 
         designed to demystify the world of skincare ingredients, offering you unparalleled insights
         into the products you use daily.
      </p>
      <p>Unlock the power of transparency:<br></br>In a market flooded with skincare options, knowledge
       is your greatest asset. Our Ingredient Analysis Module empowers you to make informed decisions
       about the products you apply to your skin. Whether you're a skincare enthusiast or a novice, 
       this tool is your gateway to understanding the composition of your favorite products.<br></br>
      Seamless Integration with Your Skin Profile:<br></br>Analysis Module seamlessly integrates with
      your unique skin profile, ensuring that the analysis is not only comprehensive but tailored
       specifically to your skin's needs. Your individual characteristics, preferences, and history 
       with active ingredients are all taken into account.<br></br>Precision Analysis, Python-Powered:
       <br></br>Behind the scenes, our advanced Python algorithms work tirelessly to process the 
       ingredients you provide. Watch as the system meticulously breaks down complex formulations, 
       providing you with a detailed analysis of each component. From antioxidants to potential 
       irritants, you'll gain a deep understanding of what makes up your skincare regimen.<br></br>
       Empowerment Through knowledge:<br></br>Our intent is clear — to empower you with knowledge. 
       Identify harmful ingredients, discover potential allergens, and take charge of your skincare 
       choices. The Ingredient Analysis Module is not just a tool; it's your ally in the quest for 
       healthier, glowing skin. Join us on this exciting journey towards skincare enlightenment. 
       The Ingredient Analysis Module is your key to unlocking the secrets within your products, 
       ensuring that every choice you make is a step towards the radiant skin you deserve. Welcome 
       to a new era of skincare empowerment!</p>
       <h1>How it Works</h1>
       <p>1. Input Flexibility:
       <ul>
        <li>Users can submit skincare ingredients either through Optical Character Recognition (OCR) 
          for a quick scan or by manual entry for a hands-on approach. Our system adapts to your 
          preferred method, ensuring convenience at every step.
        </li>
        </ul>
          2. User Skin Profile Integration:
          <ul>
            <li>Your skin profile is not just a static piece of information - it's a dynamic key
               to unlocking personalized skincare insights. The Ingredient Analysis Module syncs 
               seamlessly with your skin profile, ensuring that ingredient recommendations are finely
                tuned to your skin's unique characteristics.
            </li>
          </ul>
          3. Python-Powered Analysis:
          <ul>
            <li>Behind the scenes, our robust Python implementation processes the input data with 
              sophistication. The system's algorithms work in tandem to decipher complex ingredient 
              lists, providing a detailed breakdown of their composition.
            </li>
          </ul>
          4. Harmful Ingredient Identification:
          <ul>
            <li>The focus is on your skin's well-being. Our module meticulously identifies harmful 
              ingredients, arming you with knowledge about potential irritants, allergens, or other 
              components that might not be suitable for your skin type.
            </li>
          </ul></p>
      <div className="login">
      <div className="login-container">
          <button type="submit">Start Analysis with OCR</button>
          <text>OR</text>
          <button type="submit">Start Analysis with Manual Entry</button>
      </div>
      </div>

    </div>
 );
}

export default Ingredient;
