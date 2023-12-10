import React from 'react';
import styled from '@emotion/styled';

// Define your styled components
const ResumeContainer = styled.div`
  font-family: Arial, sans-serif;
  padding: 20px;
`;

const SectionHeading = styled.h2`
  color: #333;
  font-size: 24px;
`;

const SectionContent = styled.div`
  margin-top: 10px;
`;

const Resume = () => (
  <ResumeContainer>
    <SectionHeading>Joshua Crass</SectionHeading>
    <SectionContent>
      <div>
        <h3>Experience</h3>
        {/* Add your experience details here */}
      </div>
      <div>
        <h3>Education</h3>
        {/* Add your education details here */}
      </div>
      {/* You can add more sections like skills, projects, etc. */}
    </SectionContent>
  </ResumeContainer>
);

export default Resume;
