import React from 'react';
import './SpecialisationsComponent.css';

const SpecialisationsComponent = () => {
  return (
    <div className="specialisations-container">
      <h2>CHOOSE FROM CUTTING-EDGE SPECIALISATIONS</h2>
      <p>For the upcoming intake of October 2024, you can choose any one of the following specialist areas and align your Master’s degree with your career goals.</p>
      
      <div className="specialisations-grid">
        <div className="specialisation">
          <h3>Global Marketing Management</h3>
          <p>Develop skills in areas like Research for Customer Insights, Omnichannel Buyer Behaviour, Brand Management & Integrated Marketing Communications, Digital Marketing, Customer Value Management, Sales & Channel Management and B2B Marketing</p>
        </div>
        <div className="specialisation">
          <h3>Global Logistics and Supply Chain Management</h3>
          <p>Learn a wide range of topics, including Transportation Management, Lean Supply Chain, Strategic Sourcing, Logistics Operations, Global Transportation Management, Technology & Digitisation of Supply Chains, Supply Chain Simulation, and Demand Management</p>
        </div>
        <div className="specialisation">
          <h3>Global Finance</h3>
          <p>Understand important tools and techniques in areas like Corporate Valuation, International Finance, Equity Analysis, Portfolio Management, Financial Derivatives, Mergers & Acquisitions and Financial Technology</p>
        </div>
        <div className="specialisation">
          <h3>Digital Business Management</h3>
          <p>Examine a broad spectrum of topics such as Enterprise Digital Business Applications, E-Commerce Technologies and Payments Models, E-Business Strategies, Customer Experience Design, Digital Marketing and Digital Governance</p>
        </div>
      </div>
      
      <div className="notes">
        <h4>Notes:</h4>
        <ul>
          <li>The specialisations will be offered subject to a minimum of 10 students enrolling per specialisation.</li>
          <li>Each intake may offer a few or all the specialisations.</li>
        </ul>
      </div>
    </div>
  );
};

export default SpecialisationsComponent;
