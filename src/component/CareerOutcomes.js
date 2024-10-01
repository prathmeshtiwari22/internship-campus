import React from 'react';
import './CareerOutcomes.css';

const CareerOutcomes = () => {
    return (
        <div className="career-outcomes-container" id="career-outcomes-container">
            <h2>CAREER OUTCOMES</h2>
            <p>
                Equipped with new skills and experiences, SP Jain Global's Master of Global Business graduates are building successful careers with leading global companies across diverse sectors.
            </p>
            <p style={{fontWeight:'bold'}}>Here are the key employment highlights of our Class of 2023:</p>
            <div className="outcome-stats">
                <div className="stat">
                    <div className="map-icon"></div>
                    <h3>48%</h3>
                    <p>INTERNATIONAL PLACEMENTS</p>
                </div>
                <div className="stat">
                    <div className="map-icon"></div>
                    <h3>91%</h3>
                    <p>INTERNATIONAL INTERNSHIPS</p>
                </div>
            </div>
        </div>
    );
};

export default CareerOutcomes;
