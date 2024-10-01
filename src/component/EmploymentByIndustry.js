import React from 'react';
import './EmploymentByIndustry.css';

const EmploymentByIndustry = () => {
    return (
        <div className="employment-by-industry-container">
            <h2 style={{textAlign:'center'}}>EMPLOYMENT BY INDUSTRY</h2>
            <div className="industry-chart">
                <div className="industry-bar">
                    <span className="industry-label">IT/ITES</span>
                    <div className="bar" style={{ width: '23%' }}>
                        <span className="percentage">23%</span>
                    </div>
                </div>
                <div className="industry-bar">
                    <span className="industry-label">LOGISTICS AND SUPPLY CHAIN</span>
                    <div className="bar" style={{ width: '20%' }}>
                        <span className="percentage">20%</span>
                    </div>
                </div>
                <div className="industry-bar">
                    <span className="industry-label">RETAIL</span>
                    <div className="bar" style={{ width: '13%' }}>
                        <span className="percentage">13%</span>
                    </div>
                </div>
                <div className="industry-bar">
                    <span className="industry-label">FINANCIAL SERVICES</span>
                    <div className="bar" style={{ width: '13%' }}>
                        <span className="percentage">13%</span>
                    </div>
                </div>
                <div className="industry-bar">
                    <span className="industry-label">CONSULTING</span>
                    <div className="bar" style={{ width: '9%' }}>
                        <span className="percentage">9%</span>
                    </div>
                </div>
                <div className="industry-bar">
                    <span className="industry-label">MANUFACTURING</span>
                    <div className="bar" style={{ width: '5%' }}>
                        <span className="percentage">5%</span>
                    </div>
                </div>
                <div className="industry-bar">
                    <span className="industry-label">OTHERS*</span>
                    <div className="bar" style={{ width: '17%' }}>
                        <span className="percentage">17%</span>
                    </div>
                </div>
            </div>
            <div className="x-axis">
                <span>3%</span>
                <span>6%</span>
                <span>9%</span>
                <span>12%</span>
                <span>15%</span>
                <span>18%</span>
                <span>21%</span>
                <span>24%</span>
                <span>27%</span>
                <span>30%</span>
            </div>
        </div>
    );
};

export default EmploymentByIndustry;
