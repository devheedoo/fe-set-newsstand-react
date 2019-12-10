import React from 'react';
import styled, { css } from 'styled-components';
import PressList from './PressList';
import PressContents from './PressContents';

const ListViewBox = styled.div`
  width: 700px;
  height: 200px;
  background-color: yellow;
  display: flex;
`;

const ListView = (props) => {
  const {pressListData} = props;
  const getPressContentsById = (pressListData, id) => {
    return pressListData.filter(press => press.id === id);
  }
  const pressContentsArray = getPressContentsById(pressListData, props.pressId);
  const pressContents = pressContentsArray && pressContentsArray[0];
  return (
    <ListViewBox>
      <PressList pressListData={pressListData} />
      <PressContents contents={pressContents} />
    </ListViewBox>
  );
}

export default ListView;
