import React from 'react';
import './ExplorePrograms.css';

const ExplorePrograms = () => {
  return (
    <div className="explore-programs-container">
      <h2 className="explore-programs-title">EXPLORE OUR PROGRAMS</h2>
      <div className="explore-programs-cards">
        <div className="explore-card">
          <div className="explore-card-line"></div>
          <h3>UNDERGRADUATE PROGRAMS</h3>
          <p>Explore our range of undergraduate programs designed to shape your future.</p>
          <button className="explore-card-button">LEARN MORE</button>
        </div>
        <div className="explore-card">
          <div className="explore-card-line"></div>
          <h3>POSTGRADUATE PROGRAMS</h3>
          <p>Advance your career with our industry-focused postgraduate degrees.</p>
          <button className="explore-card-button">LEARN MORE</button>
        </div>
        <div className="explore-card">
          <div className="explore-card-line"></div>
          <h3>DOCTORATE PROGRAMS</h3>
          <p>Pursue academic excellence and research opportunities at the highest level.</p>
          <button className="explore-card-button">LEARN MORE</button>
        </div>
      </div>
    </div>
  );
};

export default ExplorePrograms;
