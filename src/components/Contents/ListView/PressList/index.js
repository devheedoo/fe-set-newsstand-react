import React from 'react';
import styled, { css } from 'styled-components';

const PressListBox = styled.div`
  flex: 0 0 150px;
  background-color: lightblue;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PressList = (props) => {
  const {pressListData} = props;
  const pressList = [];
  pressListData.map((press) => {
    pressList.push(
      <Press
        key={press.id}
        press={press}
      />
    )
  });
  return (
    <PressListBox>{pressList}</PressListBox>
  );
};

const Press = (props) => {
  const {press} = props;
  return (
    <a class="press">{press.company}</a>
  );
}

export default PressList;
