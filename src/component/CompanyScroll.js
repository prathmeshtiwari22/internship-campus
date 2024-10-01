import React from "react";
import "./CompanyScroll.css";

const companies1 = [
  "Amazon", "Apparel Group", "Aramex", "Arvind Fashions", "Asian Paints", 
  "Aster DM Healthcare", "AurionPro", "Bosch Global", "Brand Folio LLC", 
  "Christian Dior", "Comviva Technologies", "Corporate Group", "Danzas DHL", 
  "Dabur", "Dell Malaysia", "Deloitte", "Ecofy", "Emami", "Empact Consulting", 
  "Enhance Group", "Ernst & Young", "Gallega Global Logistics", "Grant Thornton", 
  "GroupM","HCL Technologies", "Himalaya Wellness", "Hilti", "ICC Loyalty", "IIFL Wealth", 
  "Incisiv", "Incisiv Analytics", "Kuehne+Nagel", "Landmark Group", 
  "Lets Transport", "Louis Vuitton", "Magnati", "Philips Health", 
  "Protiviti India", "QualityKiosk Technologies", "Schneider Electric", 
  "Siemens", "Thomson Digital", "TrackIT Solutions", "Unilever", 
  "Unimas Consulting", "WhatFix", "Yango Delivery"
];

const companies2 = [
  
];

const CompanyScroll = () => {
  return (
    <div className="company-scroll-container">
      <h2 className="section-title">Top Global Recruiters</h2>
      <div className="horizontal-scroll">
        <div className="company-grid">
          {companies1.map((company, index) => (
            <div key={index} className="company-item">
              {company}
            </div>
          ))}
        </div>
        <div className="company-grid">
          {companies2.map((company, index) => (
            <div key={index} className="company-item">
              {company}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CompanyScroll;
