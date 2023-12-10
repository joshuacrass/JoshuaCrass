import React, { useState } from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const StyledSection = styled.div`
  padding: 10px;
  display: grid;
  grid-template-columns: 1fr; /* Single column layout for mobile */

  @media (min-width: 768px) {
    grid-template-columns: 60px auto 60px; /* Three columns for screens wider than 768px */
  }
`;

const LeftCol = styled.div`
  width: 100%;
  max-width: 60px;
  display: none; /* Hide the left column on screens that are less than 768px wide */

  @media (min-width: 768px) {
    display: block; /* Show the left column on screens wider than 768px */
  }
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  /* Testing */
  height: 200px;
`;

const RightCol = styled.div`
  background-color: #a3349a;
  width: 100%;
  max-width: 60px;
  display: none; /* Hide the right column on screens that are less than 768px wide */

  @media (min-width: 768px) {
    display: flex; /* Show the right column on screens wider than 768px */
    flex-direction: column;
    gap: 5px;
  }
`;

const Header = styled.div`
  min-height: 60px;
  background-color: #090707;

  display: flex;
`;

const Contents = styled.div`
  display: flex;
  background-color: #a33434;
  transition: height 0.3s ease-in-out;
`;

const SectionIcon = styled.div`
  background-color: #347ea3;
  height: 60px;
`;

const SectionTitle = styled.h2`
  padding: 0 1rem;

  font-size: 2rem;
  color: #000;
  background-color: #fff;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Section = ({ title }) => {
  const [visible, setVisible] = useState(false);

  return (
    <StyledSection>
      <LeftCol>
        <SectionIcon />
      </LeftCol>
      <Container>
        <Header>
          <SectionTitle>{title}</SectionTitle>
        </Header>
        <Contents>
          <p>Container Component</p>
        </Contents>
      </Container>
      <RightCol>
        <SectionIcon />
        <SectionIcon />
      </RightCol>
    </StyledSection>
  );
};

Section.propTypes = {
  title: PropTypes.string,
};

Section.defaultProps = {
  title: 'Section Title',
};

export default Section;
