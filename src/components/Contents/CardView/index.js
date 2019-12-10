import React from 'react';
import styled, { css } from 'styled-components';
import pressListData from '../../../api/pressListData';
import PressCard from './PressCard';

const CardViewBox = styled.div`
  height: 300px;
  width: 700px;
  background-color: cyan;
  display: flex;
  flex-wrap: wrap;
  overflow: hidden;
  position: relative;
`;

const CardView = () => {
  const pressCardList = [];
  pressListData.map((press, index) => {
    pressCardList.push(
      <PressCard
        key={"press_card_" + (index + 1)}
        press={press}
      />
    )
  });
  return (
    <CardViewBox>{pressCardList}</CardViewBox>
  );
};

export default CardView;