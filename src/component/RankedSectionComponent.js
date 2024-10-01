import React from 'react';
import './RankedSectionComponent.css';

const RankedSectionComponent = () => {
  return (
    <div className="ranked-section" id="rankings">
      <div className="text-container">
        <h1 className="title">RANKED #1 IN AUSTRALIA</h1>
        <p className="subtitle">for skills development for postgraduate students</p>
        <p className="description">
          SP Jain School of Global Management has achieved remarkable results at the postgraduate level in the Quality
          Indicators for Learning and Teaching (QILT) 2022 student survey<sup>2</sup>, solidifying its position among Australia's top higher education institutions.
        </p>

        <div className="rank-info">
          <p className="rank-item">
            <span className="icon">🏅</span>
            <span className="rank-text">#1 In Skills Development</span>
          </p>
          <p className="rank-item">
            <span className="icon">🏅</span>
            <span className="rank-text">#2 In Learner Engagement</span>
          </p>
          <p className="rank-item">
          <span className="icon">🏅</span>
            <span className="rank-text">In The Top 20% For All Indicators</span>
          </p>
        </div>

        <p className="footer-text">
          This recognition is a testament to our exceptional faculty, industry-relevant curriculum, student-centric approach, and practical learning experience that fosters career growth.
        </p>

        <button className="cta-button">START YOUR JOURNEY WITH SP JAIN GLOBAL</button>
      </div>
      <div className="image-container">
        <img src="https://www.spjain.org/hubfs/2021/pdf/mgb/514300341-4-mgb-latest-news-section.jpg" alt="Students Walking" className="students-image" />
      </div>
    </div>
  );
};

export default RankedSectionComponent;
