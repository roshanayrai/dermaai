import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './SkinProfileCreation.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function SkinProfileCreation() {

    return (
        <div>
            <Navbar></Navbar>

            <h2>
                Skin Profile Creation
            </h2>

            <div class="main-container">
                <form>

                    <div class="input-container">
                        <label class="form-label" for="skinType">Q. How would you describe your overall skin type? (e.g., oily, dry, combination)</label>
                        <textarea class="form-input" rows="4"></textarea>
                    </div>

                    <div class="input-container">
                        <label class="form-label" for="sensitivity">Q. Do you have sensitive skin, and if so, are there specific ingredients or products that tend to trigger reactions?</label>
                        <textarea class="form-input" rows="4"></textarea>
                    </div>

                    <div class="input-container">
                        <label class="form-label" for="irritations">Q. Have you experienced any recent skin irritations or allergic reactions?</label>
                        <textarea class="form-input" rows="4"></textarea>
                    </div>
                    <div class="input-container">
                        <label class="form-label" for="diet">Q. How would you describe your diet, and do you think it has an impact on your skin?</label>
                        <textarea class="form-input" rows="4"></textarea>
                    </div>

                    <div class="input-container">
                        <label class="form-label" for="lifestyle">Q. Are there any specific lifestyle factors that might affect your skin, such as stress levels, sleep patterns, or exercise routines?</label>
                        <textarea class="form-input" rows="4"></textarea>
                    </div>

                    <div class="input-container">
                        <label class="form-label" for="diagnosed">Q. Have you been diagnosed with any skin conditions or diseases in the past?</label>
                        <textarea class="form-input" rows="4"></textarea>
                    </div>

                    <div class="input-container">
                        <label class="form-label" for="currmeds">Q. Are you currently taking any medications that could potentially affect your skin?</label>
                        <textarea class="form-input" rows="4"></textarea>
                    </div>

                    <div class="input-container">
                        <label class="form-label" for="allergies">Q. Do you have any known allergies, especially to skincare ingredients or common allergens?</label>
                        <textarea class="form-input" rows="4"></textarea>
                    </div>

                    <div class="input-container">
                        <label class="form-label" for="anyproftreat">Q. Have you undergone any professional skincare treatments or procedures in the past?</label>
                        <textarea class="form-input" rows="4"></textarea>
                    </div>

                    <div class="input-container">
                        <label class="form-label" for="reaction">Q. How did your skin react to those treatments, and were there any noticeable improvements?</label>
                        <textarea class="form-input" rows="4"></textarea>
                    </div>

                    <div class="input-flex">
                        <div>
                            <label class="form-label" for="selectCountry">Q. Select your country</label>
                            <select class="form-input" id="selectCountry" name="selectCountry">
                                <option value="city1">Country 1</option>
                                <option value="city2">Country 2</option>
                            </select>
                        </div>

                        <div>
                            <label class="form-label" for="selectCity">Q. Select your city</label>
                            <select class="form-input" id="selectCity" name="selectCity">
                                <option value="city1">City 1</option>
                                <option value="city2">City 2</option>
                            </select>
                        </div>
                    </div>

                    <div class="input-container">
                        <label class="form-label" for="timeinsun">Q. How much time do you spend in the sun, and do you take any precautions, such as wearing hats or sunglasses?</label>
                        <textarea class="form-input" rows="4"></textarea>
                    </div>

                    <div class="input-container">
                        <label class="form-label" for="sunburn">Q. Have you ever experienced sunburn or sun damage?</label>
                        <textarea class="form-input" rows="4"></textarea>
                    </div>

                    <div class="form-btn-wrapper">
                        <div class="button-container">
                        <Link to="/">
                        <button className="btn">Submit</button>
                    </Link>
                        </div>
                    </div>

                </form>
            </div>
            <Footer />
        </div>
    );
}

export default SkinProfileCreation;