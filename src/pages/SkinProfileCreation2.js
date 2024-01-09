import React from 'react';
import './SkinProfileCreation.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SkinProfileCreation2 from './SkinProfileCreation2';

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