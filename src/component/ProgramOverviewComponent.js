import React from 'react';
import styled from 'styled-components';
import programOverviewImage from '../assets/PROGRAM-OVERVIEW.png'; // Adjust the path as necessary

// Styled components for styling
const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  max-width: 800px;
  margin: auto;
  font-family: Arial, sans-serif;
`;

const ImageWrapper = styled.div`
  margin-right: 20px;
`;

const ProgramOverview = styled.div`
  color: #333;
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: bold;
  color: #000;
`;

const Details = styled.div`
  margin-top: 10px;
  line-height: 1.5;
`;

const List = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const ListItem = styled.li`
  margin: 5px 0;
  font-size: 16px;
  display: flex;
  align-items: center;
`;

const YellowBullet = styled.span`
  display: inline-block;
  width: 10px;
  height: 10px;
  background-color: #fbc02d;
  border-radius: 50%;
  margin-right: 10px;
`;

const DownloadButton = styled.button`
  background-color: #fbc02d;
  color: #000;
  font-size: 16px;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  margin-top: 20px;

  &:hover {
    background-color: #f9a825;
  }
`;

// Main component
const ProgramOverviewComponent = () => {
  return (
    <Container  id="overview">
      <ImageWrapper>
        <img src={programOverviewImage} alt="Student" />
      </ImageWrapper>
      <ProgramOverview>
        <Title>PROGRAM OVERVIEW</Title>
        <Details>
          <p>Admissions open for the October 2024 Intake</p>
          <p>
            SP Jain Global's Master of Global Business (MGB) program trains
            you to adapt to different business cultures and markets,
            preparing you for a lifetime of decision-making and leadership...
          </p>
          <List>
            <ListItem>
              <YellowBullet /> <strong>Program Duration:</strong> 16-month
              full-time program (includes a 4-month internship)
            </ListItem>
            <ListItem>
              <YellowBullet /> <strong>Study Location:</strong> Study
              on-campus in Singapore and Dubai (with an option to study in
              London at SPJ London)
            </ListItem>
            <ListItem>
              <YellowBullet /> <strong>Degree Type:</strong> Australian
              postgraduate degree (accredited by TEQSA)
            </ListItem>
            <ListItem>
              <YellowBullet /> <strong>Eligibility:</strong> Undergraduate
              degree
            </ListItem>
          </List>
          <p>
            You must have a valid GMAT / GRE / CAT score that meets our
            minimum test score criteria to be considered for admission. You
            can take the SP Jain Aptitude Test (SPJAT) if you do not have a
            valid test score.
          </p>
          <DownloadButton>DOWNLOAD A BROCHURE</DownloadButton>
        </Details>
      </ProgramOverview>
    </Container>
  );
};

export default ProgramOverviewComponent;
