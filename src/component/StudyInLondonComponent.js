import React from 'react';
import './StudyInLondonComponent.css'; // Assuming you have a separate CSS file for this component
import SpecialisationsComponent from './SpecialisationsComponent';

const StudyInLondonComponent = () => {
  return (
    <div id="london" className="study-in-london">
      <div className="london-banner">
      </div>
      <SpecialisationsComponent />
      <a href="#top" className="scroll-up-button">▲</a>
    </div>
  );
};

export default StudyInLondonComponent;
