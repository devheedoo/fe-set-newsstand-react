import React, { useState } from "react";
import styled from "styled-components";
import { Button } from "./Styled";

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

function Header({
  viewTypeInfo,
  handleChangeViewType,
  currentIndex,
  paginate,
  lastOfIndex
}) {
  // 의미상 Radio 버튼을 사용하는것이 맞음. @todo: Radio 버튼 변경
  const viewTypeButton = viewTypes =>
    viewTypes.map(viewType => (
      <Button
        key={viewType.type}
        active={viewType.isActive}
        onClick={handleChangeViewType}
        data-type={viewType.type}
      >
        {viewType.type}
      </Button>
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

  const isActive = index => detailIdx === index && true;

  return (
    <NewsStandHeader>
      <h1>Title</h1>
      <div
        style={{
          marginRight: "auto"
        }}
      >
        구독한 언론사 | 전체 언론사
      </div>
      {viewTypeButton(viewTypeInfo)}
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
