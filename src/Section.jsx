import React from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
  background-color: #9a7676;
  padding: 10px;
  border: 1px solid #000000;
  display: grid;
  grid-template-columns: 1fr; /* Single column layout for mobile */

  @media (min-width: 768px) {
    grid-template-columns: 60px auto 60px; /* Three columns for screens wider than 768px */
  }
`;

const LeftCol = styled.div`
  background-color: #3487a3;
  border: 1px solid #000000;
  width: 100%;
  max-width: 60px;
  display: none; /* Hide the left column on screens that are less than 768px wide */

  @media (min-width: 768px) {
    display: block; /* Show the left column on screens wider than 768px */
  }
`;

const Content = styled.div`
  background-color: #a33434;
  border: 1px solid #000000;
  width: 100%;

  /* Testing */
  height: 200px;
`;

const RightCol = styled.div`
  background-color: #a3349a;
  border: 1px solid #000000;
  width: 100%;
  max-width: 60px;
  display: none; /* Hide the right column on screens that are less than 768px wide */

  @media (min-width: 768px) {
    display: block; /* Show the right column on screens wider than 768px */
  }
`;

const Header = styled.div`
  background-color: #a33434;
  border: 1px solid #000000;
`;

const SectionIcon = styled.div`
  background-color: #347ea3;
  border: 1px solid #000000;
  width: 60px;
  height: 60px;
`;

const Section = () => (
  <Container>
    <LeftCol>
      <SectionIcon />
    </LeftCol>
    <Content>
      <Header>
        <h1>Header Component</h1>
      </Header>
      <p>Content Component</p>
    </Content>
    <RightCol>
      <SectionIcon />
      <SectionIcon />
    </RightCol>
  </Container>
);

export default Section;
