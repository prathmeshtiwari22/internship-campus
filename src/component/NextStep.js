import React from 'react';
import './NextStep.css';

const NextStep = () => {
  return (
    <div className="next-step-container">
      <h2 className="next-step-title">READY TO TAKE THE NEXT STEP?</h2>
      <div className="next-step-cards">
        <div className="card">
          <h3>SUBMIT YOUR APPLICATION</h3>
          <p>We are currently accepting applications for the October 2024 Intake</p>
          <button className="card-button">APPLY NOW</button>
        </div>
        <div className="card">
          <h3>MAKE AN ENQUIRY</h3>
          <p>If you would like to learn more about the fees, admission process and aptitude test, or if you have any questions before applying, please contact us.</p>
          <button className="card-button">ENQUIRE NOW</button>
        </div>
        <div className="card">
          <h3>GET A BROCHURE</h3>
          <p>Download our brochure for more information on the program curriculum, learning outcomes and faculty expertise.</p>
          <button className="card-button">DOWNLOAD BROCHURE</button>
        </div>
      </div>
    </div>
  );
};

export default NextStep;
