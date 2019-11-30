import React from 'react';
import styled, { css } from 'styled-components';

const CardViewBox = styled.div`
  height: 300px;
  width: 700px;
  background-color: cyan;
  display: flex;
  flex-wrap: wrap;
  overflow: hidden;
  position: relative;
`;

const PressCard = styled.div`
  height: 100px;
  flex: 0 0 150px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PressLogo = styled.div`
  position: absolute;
  flex: 0 0 50px;
`;

const PressOption = styled.div`
  position: absolute;
  flex: 0 0 50px;
  display: flex;
  flex-direction: row;
`;

const PubSubButton = styled.div`
  background-color: lightgreen;
`;

const PressNewsButton = styled.div`
  background-color: lightblue;
`;

const CardView = () => {
  const range = new Array(30).fill(0);
  const testList = [];
  range.map((item, index) => {
    testList.push(
      <PressCard>
        <PressLogo>
          PressLogo{index+1}
        </PressLogo>
        <PressOption>
          <PubSubButton>구독</PubSubButton>
          <PressNewsButton>기사보기</PressNewsButton>
        </PressOption>
      </PressCard>
    )
  })
  return (
    <CardViewBox>{testList}</CardViewBox>
  );
};

export default CardView;