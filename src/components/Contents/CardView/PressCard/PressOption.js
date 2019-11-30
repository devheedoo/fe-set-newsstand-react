import React from 'react';
import styled, { css } from 'styled-components'; 

const PubSubButton = styled.div`
  background-color: lightgreen;
`;

const PressNewsButton = styled.div`
  background-color: lightblue;
`;

const PressOption = () => (
  <>
    <PubSubButton>구독</PubSubButton>
    <PressNewsButton>기사보기</PressNewsButton>
  </>
)

export default PressOption;