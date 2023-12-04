import React from 'react';
import styled from '@emotion/styled';
import Section from './Section';

const Container = styled.div`
  width: 90%; /* Increase the width for larger screens */
  max-width: 800px;
  margin: 20px auto;
  padding: 20px;
  border: 1px solid #000000;
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

const sections = [
  { id: 1, name: 'intro' },
  { id: 2, name: 'experience' },
  { id: 3, name: 'education' },
  { id: 4, name: 'skills' },
];

const App = () => (
  <Container>
    <Header>
      <h1>Header Component</h1>
    </Header>
    {sections.map((section) => (
      <Section key={section.id}>{section.name}</Section>
    ))}
  </Container>
);

export default App;
