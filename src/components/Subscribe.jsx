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
  const dispatch = useContext(NewsStore);
  const subscribed = !pressData.subscribed;
  const subscribeText = subscribed ? "구독하기" : "해지하기";
  const subscribeActionType = subscribed ? "SUBSCRIBE" : "UNSUBSCRIBE";

  const handleSubscribe = () => {
    dispatch({
      type: subscribeActionType,
      payload: { ...pressData, subscribed }
    });
  };

  return (
    <SubscribeGroup>
      <SubscribeButton onClick={handleSubscribe}>
        {subscribeText}
      </SubscribeButton>
    </SubscribeGroup>
  );
};

export default Subscribe;
