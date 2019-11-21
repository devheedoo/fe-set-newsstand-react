import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Button } from "./Styled";

const NewsStandHeader = styled.header`
  display: flex;
  justifycontent: space-between;
`;

function Header({ viewTypeInfo, handleChangeViewType }) {
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

  return <NewsStandHeader>{viewTypeButton(viewTypeInfo)}</NewsStandHeader>;
}

export { Header };
