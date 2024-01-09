import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './SkinProfileCreation.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function SkinProfileCreation() {
    const history = useNavigate();

    const [overallSkinType, setOverallSkinType] = useState('');
    const [sensitiveSkin, setSensitiveSkin] = useState('');
    const [triggerIngredients, setTriggerIngredients] = useState('');
    const [recentIrritations, setRecentIrritations] = useState('');
    const [dietDescription, setDietDescription] = useState('');
    const [dietImpactOnSkin, setDietImpactOnSkin] = useState('');
    const [lifestyleFactors, setLifestyleFactors] = useState('');
    const [diagnosedSkinConditions, setDiagnosedSkinConditions] = useState('');
    const [medicationsAffectingSkin, setMedicationsAffectingSkin] = useState('');
    const [knownAllergies, setKnownAllergies] = useState('');
    const [professionalTreatments, setProfessionalTreatments] = useState('');
    const [treatmentReactions, setTreatmentReactions] = useState('');
    const [country, setCountry] = useState('');
    const [city, setCity] = useState('');
    const [sunExposure, setSunExposure] = useState('');
    const [sunPrecautions, setSunPrecautions] = useState('');

    async function submit(e) {
        e.preventDefault();

        try {
            const response = await axios.post("http://localhost:8000/SkinProfileCreation", {
                overallSkinType,
                sensitiveSkin,
                triggerIngredients,
                recentIrritations,
                dietDescription,
                dietImpactOnSkin,
                lifestyleFactors,
                diagnosedSkinConditions,
                medicationsAffectingSkin,
                knownAllergies,
                professionalTreatments,
                treatmentReactions,
                country,
                city,
                sunExposure,
                sunPrecautions
            });

            if (response.data.status === 'success') {
                history("/Homepage");
            } else {
                alert("Failed to submit skin profile. Please try again.");
                console.error("Skin profile submission failed:", response.data.message);
            }
        } catch (error) {
            alert("An error occurred while submitting skin profile. Please try again.");
            console.error("Error submitting skin profile:", error);
        }
    }

    return (
        <div>
            <Navbar></Navbar>

            <h2>Skin Profile Creation</h2>

            <div className="main-container">

                <form action="POST">
                    <div className="input-group">
                        <label className="form-label" htmlFor="overallSkinType">Q. How would you describe your overall skin type? (e.g., oily, dry, combination)</label>
                        <textarea
                            className="form-input"
                            type="string"
                            id="overallSkinType"
                            value={overallSkinType}
                            onChange={(e) => setOverallSkinType(e.target.value)}
                            rows="4"
                            required
                        ></textarea>
                    </div>

                    <div className="input-group">
                        <label className="form-label" htmlFor="sensitiveSkin">Q. Do you have sensitive skin, and if so, are there specific ingredients or products that tend to trigger reactions?</label>
                        <textarea
                            className="form-input"
                            type="string"
                            id="sensitiveSkin"
                            value={sensitiveSkin}
                            onChange={(e) => setSensitiveSkin(e.target.value)}
                            rows="4"
                            required
                        ></textarea>
                    </div>

                    <div className="input-group">
                        <label className="form-label" htmlFor="triggerIngredients">Q. Have you experienced any recent skin irritations or allergic reactions?</label>
                        <textarea
                            className="form-input"
                            type="string"
                            id="triggerIngredients"
                            value={triggerIngredients}
                            onChange={(e) => setTriggerIngredients(e.target.value)}
                            rows="4"
                            required
                        ></textarea>
                    </div>

                    <div className="input-group">
                        <label className="form-label" htmlFor="dietImpactOnSkin">Q. How would you describe your diet, and do you think it has an impact on your skin?</label>
                        <textarea
                            className="form-input"
                            type="string"
                            id="dietImpactOnSkin"
                            value={dietImpactOnSkin}
                            onChange={(e) => setDietImpactOnSkin(e.target.value)}
                            rows="4"
                            required
                        ></textarea>
                    </div>

                    <div className="input-group">
                        <label className="form-label" htmlFor="lifestyleFactors">Q. Are there any specific lifestyle factors that might affect your skin, such as stress levels, sleep patterns, or exercise routines?</label>
                        <textarea
                            className="form-input"
                            type="string"
                            id="lifestyleFactors"
                            value={lifestyleFactors}
                            onChange={(e) => setLifestyleFactors(e.target.value)}
                            rows="4"
                            required
                        ></textarea>
                    </div>

                    <div className="input-group">
                        <label className="form-label" htmlFor="diagnosedSkinConditions">Q. Have you been diagnosed with any skin conditions or diseases in the past?</label>
                        <textarea
                            className="form-input"
                            type="string"
                            id="diagnosedSkinConditions"
                            value={diagnosedSkinConditions}
                            onChange={(e) => setDiagnosedSkinConditions(e.target.value)}
                            rows="4"
                            required
                        ></textarea>
                    </div>

                    <div className="input-group">
                        <label className="form-label" htmlFor="medicationsAffectingSkin">Q. Are you currently taking any medications that could potentially affect your skin?</label>
                        <textarea
                            className="form-input"
                            type="string"
                            id="medicationsAffectingSkin"
                            value={medicationsAffectingSkin}
                            onChange={(e) => setMedicationsAffectingSkin(e.target.value)}
                            rows="4"
                            required
                        ></textarea>
                    </div>

                    <div className="input-group">
                        <label className="form-label" htmlFor="knownAllergies">Q. Do you have any known allergies, especially to skincare ingredients or common allergens?</label>
                        <textarea
                            className="form-input"
                            type="string"
                            id="knownAllergies"
                            value={knownAllergies}
                            onChange={(e) => setKnownAllergies(e.target.value)}
                            rows="4"
                            required
                        ></textarea>
                    </div>

                    <div className="input-group">
                        <label className="form-label" htmlFor="professionalTreatments">Q. Have you undergone any professional skincare treatments or procedures in the past?</label>
                        <textarea
                            className="form-input"
                            type="string"
                            id="professionalTreatments"
                            value={professionalTreatments}
                            onChange={(e) => setProfessionalTreatments(e.target.value)}
                            rows="4"
                            required
                        ></textarea>
                    </div>

                    <div className="input-group">
                        <label className="form-label" htmlFor="treatmentReactions">Q. How did your skin react to those treatments, and were there any noticeable improvements?</label>
                        <textarea
                            className="form-input"
                            type="string"
                            id="treatmentReactions"
                            value={treatmentReactions}
                            onChange={(e) => setTreatmentReactions(e.target.value)}
                            rows="4"
                            required
                        ></textarea>
                    </div>

                    <div className="input-group">
                        <label className="form-label" htmlFor="country">Q. Mention your country.</label>
                        <textarea
                            className="form-input"
                            type="string"
                            id="country"
                            value={country}
                            onChange={(e) => setCountry(e.target.value)}
                            rows="4"
                            required
                        ></textarea>
                    </div>

                    <div className="input-group">
                        <label className="form-label" htmlFor="city">Q. Mention your city.</label>
                        <textarea
                            className="form-input"
                            type="string"
                            id="city"
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                            rows="4"
                            required
                        ></textarea>
                    </div>

                    <div className="input-group">
                        <label className="form-label" htmlFor="sunExposure">Q. How much time do you spend in the sun, and do you take any precautions, such as wearing hats or sunglasses?</label>
                        <textarea
                            className="form-input"
                            type="string"
                            id="sunExposure"
                            value={sunExposure}
                            onChange={(e) => setSunExposure(e.target.value)}
                            rows="4"
                            required
                        ></textarea>
                    </div>

                    <div className="input-group">
                        <label className="form-label" htmlFor="sunPrecautions">Q. Have you ever experienced sunburn or sun damage?</label>
                        <textarea
                            className="form-input"
                            type="string"
                            id="sunPrecautions"
                            value={sunPrecautions}
                            onChange={(e) => setSunPrecautions(e.target.value)}
                            rows="4"
                            required
                        ></textarea>
                    </div>

                    <button className="btn" onClick={submit}>Submit</button>
                </form>
            </div>
            <Footer />
        </div>
    );
}

export default SkinProfileCreation;