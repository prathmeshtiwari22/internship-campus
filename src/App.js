import React, { useEffect } from 'react';
import './App.css';
import ProgramOverviewComponent from './component/ProgramOverviewComponent';
import logo from './assets/download.png';
import StudyInLondonComponent from './component/StudyInLondonComponent';
import CareerOutcomes from './component/CareerOutcomes';
import GraduateSalaries from './component/GraduateSalaries';
import EmploymentByIndustry from './component/EmploymentByIndustry';
import CompanyScroll from './component/CompanyScroll';
import ClassProfile from './component/ClassProfile';
import StudentExperienceComponent from './component/StudentExperienceComponent';
import RankedSectionComponent from './component/RankedSectionComponent';
import SPJainAdvantage from './component/SPJainAdvantage';
import NextStep from './component/NextStep';
import RankingCards from './component/RankingCards';
import Footer from './component/Footer';


const App = () => {
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      const navLi = document.querySelectorAll(".nav ul li a");
      const scrollUpButton = document.querySelector(".scroll-up-button");

      let current = "";

      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (window.pageYOffset >= sectionTop - sectionHeight / 3) {
          current = section.getAttribute("id");
        }
      });

      navLi.forEach(a => {
        a.classList.remove("active");
        if (a.getAttribute("href").slice(1) === current) {
          a.classList.add("active");
        }
      });

      // Show/hide scroll-up button
      if (scrollUpButton) { // Ensure the button exists
        if (window.pageYOffset > 300) {
          scrollUpButton.classList.add("visible");
        } else {
          scrollUpButton.classList.remove("visible");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="container">
      <header className="header">
      <div className="logo">
          <img src={logo} alt="SPJ Global" /> {/* Using the imported image */}
        </div>
        <nav className="nav">
          <ul>
          <li><a href="#overview">OVERVIEW</a></li> {/* Link to the section ID */}
            <li><a href="#london">STUDY IN LONDON</a></li>
            <li><a href="#career-outcomes-container">CAREERS</a></li>
            <li><a href="#class-profile-container">CLASS PROFILE</a></li>
            <li><a href="#experiences">STUDENT EXPERIENCES</a></li>
            <li><a href="#rankings">RANKINGS</a></li>
            <li><button className="apply-button">APPLY</button></li>
          </ul>
        </nav>
      </header>
      <main className="main">
        <div className="left-section">
          <div className="heading">
            <h1>Give your career a global edge with SP Jain Global</h1>
            <h2>Asia Pacific's #7 Best B-School: Bloomberg Businessweek</h2>
          </div>
          <div className="title">
            <h1>MASTER OF GLOBAL BUSINESS</h1>
          </div>
          <div className="admission-info">
            <p>Admissions open for October 2024 Intake</p>
          </div>
        </div>
        <div className="right-section">
          <div className="enquiry-form" style={{backgroundColor:'yellow'}}>
            <h2 style={{backgroundColor:'yellow'}}>ENQUIRE NOW</h2>
            <form>
              <div className="form-field">
                <label htmlFor="firstName">First Name *</label>
                <input type="text" id="firstName" name="firstName" />
              </div>
              <div className="form-field">
                <label htmlFor="lastName">Last Name *</label>
                <input type="text" id="lastName" name="lastName" />
              </div>
              <div className="form-field">
                <label htmlFor="email">Email *</label>
                <input type="email" id="email" name="email" />
              </div>
              <div className="form-field">
                <label htmlFor="country">India (+91)</label>
                <select id="country" name="country">
                  <option value="India (+91)">India (+91)</option>
                </select>
              </div>
              <div className="form-field">
                <label htmlFor="state">State *</label>
                <select id="state" name="state">
                </select>
              </div>
              <div className="form-field">
                <label htmlFor="collegeName">College Name *</label>
                <input type="text" id="collegeName" name="collegeName" />
              </div>
              <div className="form-field">
                <label htmlFor="degree">Bachelor's Degree in *</label>
                <select id="degree" name="degree">
                </select>
              </div>
              <div className="form-field">
                <label htmlFor="graduationYear">Year of Graduation *</label>
                <select id="graduationYear" name="graduationYear">
                </select>
              </div>
              <div className="form-field">
                <label htmlFor="entranceTest">Select the Entrance Test Taken *</label>
                <select id="entranceTest" name="entranceTest">
                </select>
              </div>
              <div className="form-field">
                <label htmlFor="studyOption">Please select your preferred study option *</label>
                <select id="studyOption" name="studyOption">
                </select>
              </div>
              <div className="form-field">
                <input type="checkbox" id="mentor" name="mentor" />
                <label htmlFor="mentor">I would like a student mentor to assist me for more information about the program</label>
              </div>
              <button type="submit" className="submit-button">SUBMIT</button>
            </form>
          </div>
        </div>
      </main>
        <ProgramOverviewComponent/>
      <StudyInLondonComponent/>
      <CareerOutcomes/>
      <GraduateSalaries/>
      <EmploymentByIndustry/>
      <CompanyScroll/>
      <ClassProfile/>
      <StudentExperienceComponent/>
      <RankedSectionComponent/>
      <SPJainAdvantage/>
      <NextStep/>
      <RankingCards/>
      <Footer/>
      <a href="#top" className="scroll-up-button" style={{ display: 'none' }}>▲</a>
    </div>
  );
};

export default App;
