import React from 'react';
import styled from 'styled-components'

const Press = () => {
  const PressContainer = styled.ul`
    width: 15%;
    background-color: #00918e;
    height: 100%;
    display: flex;
    flex-flow: column;
    justify-content: space-evenly;
    align-items: center;
  `;
  return (
    <PressContainer>
      <li>언론사</li>
      <li>언론사</li>
      <li>언론사</li>
      <li>언론사</li>
    </PressContainer>
  );
};

export default Press;