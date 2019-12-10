import React from 'react';
import styled, { css } from 'styled-components';
import PressOption from './PressOption';

const PressOptionBox = styled.div`
  position: absolute;
  flex: 0 0 50px;
  display: flex;
  flex-direction: row;
  opacity: 0;
`;

const PressCardBox = styled.div`
  height: 66px;
  flex: 0 0 115px;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover ${PressOptionBox} {
    opacity: 1;
  }
`;

const PressLogoBox = styled.div`
  position: absolute;
  flex: 0 0 50px;
`;

const PressCard = (props) => {
  return (
    <PressCardBox>
      <PressLogoBox>
        <img src={props.press.logoImgUrl} alt={props.press.company} />
      </PressLogoBox>
      <PressOptionBox>
        <PressOption />
      </PressOptionBox>
    </PressCardBox>
  )
}

export default PressCard;