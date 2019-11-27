import React, { useContext } from "react";
import styled from "styled-components";
import { NewsStore } from "../App";

const SubscribeGroup = styled.div`
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

const Subscribe = ({ pressData }) => {
  const setSubscribed = useContext(NewsStore);

  const handleSubscribe = () => {
    setSubscribed({ ...pressData, subscribed: true });
  };

  return (
    <SubscribeGroup>
      <SubscribeButton onClick={handleSubscribe}>구독하기</SubscribeButton>
      <SubscribeButton>기사보기</SubscribeButton>
    </SubscribeGroup>
  );
};

export default Subscribe;
