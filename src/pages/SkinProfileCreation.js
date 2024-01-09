import React from 'react';
import './SkinProfileCreation.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function SkinProfileCreation() {
    return (
        <div>
            <Navbar></Navbar>
        
        <div className="main-container">
            
            <form action="" method="POST">
                <div className="steps steps-horizontal">
                    <ul>
                        <li className="step-menu1 active">
                            <span>1</span>
                            <p>Skin Type</p>
                        </li>
                        <li className="step-menu2">
                            <span>2</span>
                            <p>Medical History</p>
                        </li>
                        <li className="step-menu3">
                            <span>3</span>
                            <p>Environmental Factors</p>
                        </li>
                    </ul>
                </div>

                <div className="form-step-1 active">
                    <div className="input-container">
                        <label className="form-label" for="skinType">Q. How would you describe your overall skin type? (e.g., oily, dry, combination)</label>
                        <textarea className="form-input" rows="4"></textarea>
                    </div>
                    
                    <div className="input-container">
                        <label className="form-label" for="sensitivity">Q. Do you have sensitive skin, and if so, are there specific ingredients or products that tend to trigger reactions?</label>
                        <textarea className="form-input" rows="4"></textarea>
                    </div>
                    
                    <div className="input-container">
                        <label className="form-label" for="irritations">Q. Have you experienced any recent skin irritations or allergic reactions?</label>
                        <textarea className="form-input" rows="4"></textarea>
                    </div>
                </div>

                <div className="form-step-2">
                    <div className="input-container">
                        <label className="form-label" for="diet">Q. How would you describe your diet, and do you think it has an impact on your skin?</label>
                        <textarea className="form-input" rows="4"></textarea>
                    </div>

                    <div className="input-container">
                        <label className="form-label" for="lifestyle">Q. Are there any specific lifestyle factors that might affect your skin, such as stress levels, sleep patterns, or exercise routines?</label>
                        <textarea className="form-input" rows="4"></textarea>
                    </div>

                    <div className="input-container">
                        <label className="form-label" for="diagnosed">Q. Have you been diagnosed with any skin conditions or diseases in the past?</label>
                        <textarea className="form-input" rows="4"></textarea>
                    </div>

                    <div className="input-container">
                        <label className="form-label" for="currmeds">Q. Are you currently taking any medications that could potentially affect your skin?</label>
                        <textarea className="form-input" rows="4"></textarea>
                    </div>

                    <div className="input-container">
                        <label className="form-label" for="allergies">Q. Do you have any known allergies, especially to skincare ingredients or common allergens?</label>                            
                        <textarea className="form-input" rows="4"></textarea>
                    </div>

                    <div className="input-container">
                        <label className="form-label" for="anyproftreat">Q. Have you undergone any professional skincare treatments or procedures in the past?</label>
                        <textarea className="form-input" rows="4"></textarea>
                    </div>

                    <div className="input-container">
                        <label className="form-label" for="reaction">Q. How did your skin react to those treatments, and were there any noticeable improvements?</label>
                        <textarea className="form-input" rows="4"></textarea>
                    </div>
                </div>
                
                <div className="form-step-3">
                    <div className="input-flex">
                        <div>
                            <label className="form-label" for="selectCountry">Q. Select your country</label>
                            <select className="form-input" id="selectCountry" name="selectCountry">
                                <option className="country1">Country 1</option>
                                <option className="country2">Country 2</option>
                            </select>
                        </div>

                        <div>
                            <label className="form-label" for="selectCity">Q. Select your city</label>
                            <select className="form-input" id="selectCity" name="selectCity">
                                <option className="city1">City 1</option>
                                <option className="city2">City 2</option>
                            </select>
                        </div>
                    </div>

                   <div className="input-container">
                        <label className="form-label" for="timeinsun">Q. How much time do you spend in the sun, and do you take any precautions, such as wearing hats or sunglasses?</label>
                        <textarea className="form-input" rows="4"></textarea>
                    </div>

                    <div className="input-container">
                        <label className="form-label" for="sunburn">Q. Have you ever experienced sunburn or sun damage?</label>
                        <textarea className="form-input" rows="4"></textarea>
                    </div>
                </div>       

                <div className="form-btn-wrapper">
                    <div className="button-container">
                        <button className="btn">Next</button>
                    </div>
                </div>

            </form>
            </div>
            <Footer></Footer>
        </div>
    );
   }
   
export default SkinProfileCreation;   