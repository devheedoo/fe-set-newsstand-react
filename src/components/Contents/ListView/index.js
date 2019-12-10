import React from 'react';
import styled, { css } from 'styled-components';
import pressListData from '../../../api/pressListData';
import PressList from './PressList';
import PressContents from './PressContents';

const ListViewBox = styled.div`
  width: 700px;
  height: 200px;
  background-color: yellow;
  display: flex;
`;

const ListView = () => {
  return (
    <ListViewBox>
      <PressList pressListData={pressListData} />
      <PressContents contents={pressListData[0]} />
    </ListViewBox>
  );
}

export default ListView;
