import React from 'react';
import './Ingredient.css';

function SkinIT() {
 return (
    <div className="App">
      <h1>Skin Issue Identification Tool</h1>
      <h3>Elevate Your Skin Journey: Precision Diagnosis, Personalized Solutions, Radiant Results!</h3>
      <p>Embark on a journey of self-discovery with our Skin Issue Identification Tool, where precision 
        meets personalization, and every step is a stride towards your most radiant self. Elevate your 
        skincare routine; embrace the beauty that is uniquely yours!
      </p>
       <h1>How it Works</h1>
       <p>Welcome to our Skin Issue Identification Module - your gateway to personalized skincare 
        enlightenment. Our cutting-edge AI algorithms delve deep into the intricacies of your skin profile,
        unraveling a bespoke roadmap to your most radiant self.<br></br>
        1. User Profile Analysis:
       <ul>
        <li>Begin your journey by sharing key details like skin type, medical history, and past experiences
           with active ingredients. Our AI-driven analysis kicks into gear, crafting a comprehensive 
           understanding of your unique skin canvas.
        </li>
        </ul>
          2. Advanced Algorithmic Magic:
          <ul>
            <li>Our state-of-the-art Python server hosts an ensemble of advanced AI algorithms. These digital
               wizards process your data with precision, identifying a spectrum of skin concerns with unparalleled accuracy.
            </li>
          </ul>
          3. Foundation for Personalized Care:
          <ul>
            <li>The identified skin issues lay the groundwork for a personalized skincare approach. Whether it's dryness, 
              blemishes, or fine lines, our system creates a customized plan tailored to your specific needs.
            </li>
          </ul></p>
          <h1>Treatment Recommendation</h1>
       <p>The Treatment Recommendation Submodule takes center stage, translating the identified skin concerns into actionable
         steps for a vibrant complexion.<br></br>
        1. Skincare Product Recommendations:
       <ul>
        <li>Dive into a curated selection of the top three skincare products meticulously chosen to address your unique skin 
          issues. Each recommendation is backed by science and crafted to elevate your skincare routine.
        </li>
        </ul>
          2. Dermatologist Suggestions:
          <ul>
            <li>In cases demanding professional attention, our submodule seamlessly integrates with a network of reputable
               dermatologists. Recommendations are based on your geographic location and the specific nature of your skin 
               concerns, ensuring you connect with the right expert for a tailored skincare journey.
            </li>
          </ul>
          3. Comprehensive Guidance:
          <ul>
            <li>Experience a holistic approach to skincare guidance. From product suggestions to connecting with top-notch
               dermatologists, our AI-driven system ensures you receive comprehensive and user-specific recommendations 
               for a radiant transformation.
            </li>
          </ul></p>
      <div className="login">
      <div className="login-container">
          <button type="submit">Start Diagnosing!</button>
      </div>
      </div>

    </div>
 );
}

export default SkinIT;
