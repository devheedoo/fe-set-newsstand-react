import React, { useState } from "react";
import styled from "styled-components";
import { Button } from "./Styled";
import RadioButton from "./RadioButton";
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";

const NewsStandHeader = styled.header`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const Pager = styled(Button)`
  color: #333;

  &:hover {
    color: var(--buttonActiveColor);
  }
`;

const PressGroup = styled.div`
  margin-right: auto;
`;

const PressLink = styled(Link)``;

function Header({
  viewTypeInfo,
  handleChangeViewType,
  currentIndex,
  paginate,
  lastOfIndex
}) {
  let isMatch = useRouteMatch("/subscribe");

  const viewTypeButton = viewTypes =>
    viewTypes.map((viewType, index) => (
      <RadioButton
        value={viewType.type}
        isActive={viewType.isActive}
        handleChange={handleChangeViewType}
        name="list-types"
        key={index}
      />
    ));

  const activeViewType = viewTypeInfo.find(
    viewType => viewType.isActive === true
  );

  const handlePrevClick = () => {
    if (currentIndex <= 0) return false;
    paginate(currentIndex - 1);
  };

  const handleNextClick = () => {
    if (currentIndex >= lastOfIndex) return false;
    paginate(currentIndex + 1);
  };

  return (
    <NewsStandHeader>
      <h1>Title</h1>
      <PressGroup>
        <PressLink to="/all">전체 언론사</PressLink> |
        <PressLink to="/subscribe">구독한 언론사</PressLink>
      </PressGroup>
      {isMatch && viewTypeButton(viewTypeInfo)}
      <div>
        {activeViewType.type === "list" && (
          <>
            <Pager onClick={handlePrevClick}>Prev</Pager>
            <Pager onClick={handleNextClick}>Next</Pager>
          </>
        )}
      </div>
    </NewsStandHeader>
  );
}

export { Header };
