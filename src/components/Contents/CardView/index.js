import React, { useContext } from 'react';
import styled, { css } from 'styled-components';
import * as constants from '../../constants';
import SubscriptionContext from '../../SubscriptionContext';

const CardViewBox = styled.div`
  height: 200px;
  width: 700px;
  background-color: cyan;
  display: flex;
  flex-wrap: wrap;
  overflow: hidden;
  position: relative;
  align-content: flex-start;
`;

const CardView = (props) => {
  const {pressListData, page} = props;
  const pressCardList = [];
  pressListData.map((press, index) => {
    if (
      index >= page * constants.PRESS_COUNT_PER_PAGE &&
      index < (page + 1) * constants.PRESS_COUNT_PER_PAGE
    ) {
      pressCardList.push(
        <PressCard
          key={"press_card_" + (index + 1)}
          press={press}
        />
      )
    }
  });
  return (
    <CardViewBox>{pressCardList}</CardViewBox>
  );
};

const PressOptionBox = styled.div`
  position: absolute;
  flex: 0 0 50px;
  display: flex;
  flex-direction: row;
  opacity: 0;
`;

const PressCardBox = styled.div`
  height: 66px;
  flex: 0 0 115px;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover ${PressOptionBox} {
    opacity: 1;
  }
`;

const PressLogoBox = styled.div`
  position: absolute;
  flex: 0 0 50px;
`;

const getSubscriptingPressIds = (subscription) => {
  return subscription.map(press => press.id);
}

const PressCard = (props) => {
  const subscriptionContext = useContext(SubscriptionContext);
  const subscriptingPressIds = getSubscriptingPressIds(subscriptionContext.subscription)
  const isSubscribing = subscriptingPressIds.includes(props.press.id);
  return (
    <PressCardBox>
      <PressLogoBox>
        <img src={props.press.logoImgUrl} alt={props.press.company} />
      </PressLogoBox>
      <PressOptionBox>
        {isSubscribing ? (
          <button onClick={() => subscriptionContext.dispatchSubscription({ type: 'unsubscribe', payload: props.press.id })}>해지</button>
        ) : (
          <button onClick={() => subscriptionContext.dispatchSubscription({ type: 'subscribe', payload: props.press.id })}>구독</button>
        )}
        <button>기사보기</button>
      </PressOptionBox>
    </PressCardBox>
  )
}

export default CardView;