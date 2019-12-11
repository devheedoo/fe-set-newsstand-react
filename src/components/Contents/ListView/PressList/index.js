import React from 'react';
import styled, { css } from 'styled-components';

const PressListBox = styled.div`
  flex: 0 0 150px;
  height: 200px;
  overflow: scroll;
  background-color: lightblue;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  padding: 12px;
`;

const PressList = (props) => {
  const {pressListData, pressId} = props;
  const pressList = [];
  pressListData.map((press) => {
    const isHighlighting = press.id === pressId;
    pressList.push(
      <Press
        key={press.id}
        press={press}
        isHighlighting={isHighlighting}
      />
    )
  });
  return (
    <PressListBox>
      <ul style={{
        padding: 0,
        margin: 0,
        listStyle: 'none',
        lineHeight: '15px',
        fontSize: '12px',
      }}>{pressList}</ul>
    </PressListBox>
  );
};

const Press = (props) => {
  const {press, isHighlighting} = props;
  const fontColor = isHighlighting ? 'red' : 'black';
  return (
    <li style={{ color: fontColor }}>
      {press.company}
    </li>
  );
}

export default PressList;
