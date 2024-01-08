import React from 'react';
import './Ingredient.css';

function Weather() {
 return (
    <div className="App">
      <h1>Recommendations with Weather API</h1>
      <h3>Adapting Skincare to Your Climate: Your Weather-Infused Guide to Radiant Skin!</h3>
      <p>Introducing our Weather API Recommendation Tool — a game-changer in personalized skincare.
         This innovative module elevates your beauty routine by seamlessly integrating real-time 
         weather data into our application. Tailored recommendations, aligned with your specific 
         location and environmental factors, ensure your skin thrives in every season.
      </p>
       <h1>How it Works</h1>
       <p>
        1. User Location Specification:
       <ul>
        <li>Users input their location in their profiles, allowing the system to provide location-specific
           skincare recommendations. Whether you're in a tropical paradise or a chilly metropolis, your 
           skincare advice will be customized accordingly.
        </li>
        </ul>
          2. Dynamic Weather Data Retrieval:
          <ul>
            <li>Our system taps into real-time weather data, retrieving the latest updates for your 
              specified location. This dynamic approach ensures that your skincare recommendations 
              align with the current weather conditions, adapting to the ever-changing climate.
            </li>
          </ul>
          3. Weekly Forecast Analysis:
          <ul>
            <li>Receive a weekly forecast analysis, highlighting key weather factors that can impact
               your skin health. From temperature fluctuations to UV intensity, stay informed about 
               the elements that matter most for your skincare routine.
            </li>
          </ul>
          4. Personalized Skincare Recommendations:
          <ul>
            <li>Armed with real-time weather insights, the module generates personalized skincare
               recommendations. Whether it's adjusting your hydration levels or amping up your sun
               protection, every piece of advice is tailored to optimize your skin health in your specific climate.
            </li>
          </ul></p>
        
      <div className="login">
      <div className="login-container">
          <button type="submit">Find Weather Indexes</button>
          <br></br>
          <br></br>
          <button type="submit">Generate Recommendations</button>
          
      </div>
      </div>

    </div>
 );
}

export default Weather;
