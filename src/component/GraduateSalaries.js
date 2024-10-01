import React from 'react';
import './GraduateSalaries.css';

const GraduateSalaries = () => {
    return (
        <div className="graduate-salaries-container">
            <h2>GRADUATE SALARIES</h2>
            <div className="currency-selector">
                <label htmlFor="currency">Select Currency:</label>
                <select id="currency" name="currency">
                    <option value="USD">USD</option>
                    <option value="SGD">SGD</option>
                    <option value="INR">INR</option>
                    <option value="AUD">AUD</option>
                    <option value="AED">AED</option>
                    <option value="GBP">GBP</option>
                </select>
            </div>
            <div className="salary-stats">
                <div className="salary">
                    <h3 className="yellow-text">USD 64,926</h3>
                    <p>HIGHEST SALARY</p>
                </div>
                <div className="salary">
                    <h3 className="yellow-text">USD 23,423</h3>
                    <p>AVERAGE SALARY</p>
                </div>
                <div className="salary">
                    <h3 className="yellow-text">7-FOLD INCREASE</h3>
                    <p>OVER PRE-PROGRAM SALARIES*</p>
                </div>
            </div>
            <p className="note">*This does not include graduates with no prior work experience.</p>
        </div>
    );
};

export default GraduateSalaries;
