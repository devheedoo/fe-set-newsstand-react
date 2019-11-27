import React, { useState } from "react";
import styled from "styled-components";

const PressWrapper = styled.div`
  position: relative;
  display: flex;
  flex: 1;
  height: 100%;

  cursor: pointer;
`;

const Subscribe = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  background-color: #fff;
`;

const SubscribeButton = styled.button`
  margin: auto;
`;

const Image = styled.img`
  margin: auto;
`;

function Press({ item }) {
  const [isOver, setIsOver] = useState(false);
  const handleMouseEnter = () => setIsOver(true);
  const handleMouseLeave = () => setIsOver(false);

  const handleSubscribe = () => {};

  const handleViewArticle = () => {};

  return (
    <PressWrapper
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Image src={item.logoImgUrl} alt="" />
      {isOver && (
        <Subscribe>
          <SubscribeButton onClick={handleSubscribe}>구독하기</SubscribeButton>
          <SubscribeButton onClick={handleViewArticle}>
            기사보기
          </SubscribeButton>
        </Subscribe>
      )}
    </PressWrapper>
  );
}

export { Press };
