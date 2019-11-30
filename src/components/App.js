import React from 'react';
import styled, { css } from 'styled-components';

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: ${props => props.color ? props.color : "black"};
`;

const App = props => {
  return (
    <div>
      <Title color="blue">Hello, I'm Choco!</Title>
      Good evening :D
    </div>
  );
};

export default App;