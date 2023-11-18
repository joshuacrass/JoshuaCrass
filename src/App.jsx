// src/components/App.js
import React from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
  background-color: #000000;
  color: #ffffff;
  padding: 20px;
  font-size: 2rem;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const App = () => {
  return (
    <Container>
      <h1>Joshua Crass</h1>
    </Container>
  );
};

export default App;
