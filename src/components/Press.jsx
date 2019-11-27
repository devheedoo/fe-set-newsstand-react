import React, { useState, useContext } from "react";
import styled from "styled-components";
import Subscribe from "./Subscribe";

const PressWrapper = styled.div`
  position: relative;
  display: flex;
  flex: 1;
  height: 100%;
  cursor: pointer;
`;

const Image = styled.img`
  margin: auto;
`;

function Press({ pressData }) {
  const [isOver, setIsOver] = useState(false);
  const handleMouseEnter = e => {
    e.stopPropagation();
    setIsOver(true);
  };
  const handleMouseLeave = e => {
    e.stopPropagation();
    setIsOver(false);
  };

  return (
    <PressWrapper
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Image src={pressData.logoImgUrl} alt="" />
      {isOver && <Subscribe pressData={pressData} />}
    </PressWrapper>
  );
}

export { Press };
