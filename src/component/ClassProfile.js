import React from "react";
import "./ClassProfile.css";
import groupIcon from '../assets/group.jpg';
import businesswomanIcon from '../assets/businesswoman.png';
import ageIcon from '../assets/age.png';
import suitcaseIcon from '../assets/suitcase.jpg';
import speedometerIcon from '../assets/speedometer.jpg';
import nationalicon from '../assets/Screenshot 2024-08-20 181510.png';

const ClassProfile = () => {
  return (
    <div className="class-profile-container" id="class-profile-container">
      <h2 className="class-profile-title">CLASS PROFILE</h2>
      <p className="class-profile-description">
        Get to know our dynamic student community. Here’s a snapshot of the class profile data of the students who joined us in 2023:
      </p>
      <div className="class-profile-stats">
        <div className="stat-item">
          <img src={groupIcon} alt="Students Icon" className="stat-icon" />
          <h3>259 STUDENTS</h3>
          <p>TOTAL CLASS SIZE</p>
        </div>
        <div className="stat-item">
          <img src={businesswomanIcon} alt="Women Icon" className="stat-icon" />
          <h3>36%</h3>
          <p>WOMEN PARTICIPATION</p>
        </div>
        <div className="stat-item">
          <img src={ageIcon} alt="Age Icon" className="stat-icon" />
          <h3>23 YEARS</h3>
          <p>AVERAGE AGE</p>
        </div>
        <div className="stat-item">
          <img src={suitcaseIcon} alt="Experience Icon" className="stat-icon" />
          <h3>8 MONTHS</h3>
          <p>AVERAGE WORK EXPERIENCE</p>
        </div>
        <div className="stat-item">
          <img src={speedometerIcon} alt="GMAT Icon" className="stat-icon" />
          <h3>680</h3>
          <p>AVERAGE GMAT SCORE</p>
        </div>
      </div>
      {/* Nationalities Represented Section */}
      <div className="nationalities-represented">
        <img
          src={nationalicon}
          alt="Nationalities Represented"
          className="nationalities-image"
        />
      </div>

    </div>
  );
};

export default ClassProfile;
