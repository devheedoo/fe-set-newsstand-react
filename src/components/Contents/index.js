import React from 'react';
import styled, { css } from 'styled-components';
import ListView from './ListView';
import CardView from './CardView';
import * as constants from '../constants';

const ContentsBox = styled.div`
  display: flex;
  width: 780px;
  height: 700px;
  background-color: orange;
  flex-direction: column;
  align-items: center;
`;

const Contents = (props) => {
  const {viewType, pressListData, pressId, page} = props;
  return (
    <ContentsBox>
      {viewType === constants.VIEW_TYPE_LIST ? (
        <ListView
          pressListData={pressListData}
          pressId={pressId}
        />
      ) : null}
      {viewType === constants.VIEW_TYPE_CARD ? (
        <CardView
          pressListData={pressListData}
          page={page}
        />
      ) : null}
    </ContentsBox>
  );
}

export default Contents;