import React from "react";
import styled from "styled-components";
import { usePressState, usePressDispatch } from "../PressContext";

const Press = () => {
  const PressContainer = styled.ul`
    width: 15%;
    background-color: #00918e;
    height: 100%;
    display: flex;
    flex-flow: column;
    justify-content: space-evenly;
    align-items: center;
    overflow-y: scroll;
  `;

  const PressItem = styled.li`
    margin-top: 4px;
    cursor: pointer;
  `

  const pressList = usePressState().data;
  const dispatch = usePressDispatch();

  const onChange = (index) => dispatch({ type: "CHANGE", index });

  if (pressList.length > 0) {
    return (
      <PressContainer>
        {pressList.map((press, index) => (
          <PressItem onClick={() => { onChange(index) }} key={press.id}>{press.company}</PressItem>
        ))}
      </PressContainer>
    );
  }
  return <div>로딩중...</div>
};

export default Press;
