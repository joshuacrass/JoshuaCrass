import React from 'react';
import styled from '@emotion/styled';
import Section from './components/Sections';

const Container = styled.div`
  width: 90%; /* Increase the width for larger screens */
  max-width: 800px;
  margin: 20px auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Header = styled.div`
  color: #000000;
  padding: 10px;
  text-align: center;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const SectionWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2px;
`;

const sections = [
  { id: 1, name: 'intro', color: '#1bc9e4', icon: 'User', iconType: 'solid' },
  {
    id: 2,
    name: 'experience',
    color: '#ff754a',
    icon: 'Bars',
    iconType: 'solid',
  },
  {
    id: 3,
    name: 'education',
    color: '#1be489',
    icon: 'School',
    iconType: 'solid',
  },
  {
    id: 4,
    name: 'skills',
    color: '#ffc455',
    icon: 'Toolbox',
    iconType: 'solid',
  },
  {
    id: 6,
    name: 'contact',
    color: '#ff3430',
    icon: 'Phone',
    iconType: 'solid',
  },
];

const App = () => (
  <Container>
    <Header>
      <h1>Header Component</h1>
    </Header>
    {sections.map((section) => (
      <SectionWrapper>
        <Section
          key={section.id}
          title={section.name}
          color={section.color}
          icon={section.icon}
          iconType={section.iconType}
        />
      </SectionWrapper>
    ))}
  </Container>
);

export default App;
