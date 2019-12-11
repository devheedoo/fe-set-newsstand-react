import React, { useContext } from 'react';
import styled, { css } from 'styled-components';
import PressCard from './PressCard';
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
`;

const getSubscriptingPressIds = (subscription) => {
  return subscription.map(press => press.id);
}

const CardView = (props) => {
  const subscriptionContext = useContext(SubscriptionContext);
  // console.log(`subscription`);
  // console.log(subscriptionContext.subscription);
  const {pressListData, page} = props;
  const subscriptionPressIds = getSubscriptingPressIds(subscriptionContext.subscription);
  const pressCardList = [];
  pressListData.map((press, index) => {
    if (
      index >= page * constants.PRESS_COUNT_PER_PAGE &&
      index < (page + 1) * constants.PRESS_COUNT_PER_PAGE &&
      // if mypage,
      subscriptionPressIds.includes(press.id)
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

export default CardView;