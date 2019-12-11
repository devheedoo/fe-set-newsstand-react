import React, { useState, useReducer } from 'react';
import styled, { css } from 'styled-components';
import pressListData from '../api/pressListData';
import Contents from './Contents';
import * as constants from './constants';

import SubscriptionContext from './SubscriptionContext';

// Container
const Container = styled.div`
  display: flex;
  background-color: pink;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

// Menubar (상단)
const Menubar = styled.div`
  display: flex;
  height: 50px;
  width: 780px;
  background-color: brown;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`;

const PressFilter = styled.div`
  flex: 0 0 300px;
  background-color: gray;
`;

const ViewControl = styled.div`
  flex: 0 0 300px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  background-color: blue;
`;

const ViewType = styled.div`
  flex: 0 0 100px;
  background-color: green;
`;

const PrevNext = styled.div`
  flex: 0 0 100px;
  background-color: lightgreen;
  display: flex;
`;

const Prev = styled.div`
  flex: 0 0 45px;
`;

const Next = styled.div`
  flex: 0 0 45px;
`;

const subscriptionReducer = (subscription, { type, payload }) => {
  switch (type) {
    case 'subscribe':
      return [...subscription, { id: payload }];
      return;
    case 'unsubscribe':
      return subscription.filter(press => press.id !== payload);
      return;
    default:
      break;
  }
}

const App = props => {
  const [pressIndex, setPressIndex] = useState(0);
  const [page, setPage] = useState(0);
  const [viewType, setViewType] = useState(constants.VIEW_TYPE_LIST);
  const [subscription, dispatch] = useReducer(subscriptionReducer, [
    { id: '055' },
    { id: '057' },
    { id: '073' },
  ]);

  const pressIds = pressListData.map(press => press.id);
  const maxPage = Math.ceil(pressListData.length / 18)

  const goToPrevPress = () => {
    if (pressIndex > 0) {
      setPressIndex(pressIndex - 1);
    } else {
      setPressIndex(pressIndex - 1 + pressIds.length);
    }
  }
  const goToNextPress = () => {
    if (pressIndex < pressIds.length - 1) {
      setPressIndex(pressIndex + 1);
    } else {
      setPressIndex(pressIndex + 1 - pressIds.length);
    }
  }

  const goToPrevPage = () => {
    if (maxPage <= 1) return;
    if (page > 0) {
      setPage(page - 1);
    } else {
      setPage(page - 1 + maxPage);
    }
  }
  const goToNextPage = () => {
    if (maxPage <= 1) return;
    if (page < maxPage - 1) {
      setPage(page + 1);
    } else {
      setPage(page + 1 - maxPage);
    }
  }

  const handlePrevButton = () => {
    switch (viewType) {
      case constants.VIEW_TYPE_LIST:
        goToPrevPress();
        break;
      case constants.VIEW_TYPE_CARD:
        goToPrevPage();
        break;
      default:
        break;
    }
  }
  const handleNextButton = () => {
    switch (viewType) {
      case constants.VIEW_TYPE_LIST:
        goToNextPress();
        break;
      case constants.VIEW_TYPE_CARD:
        goToNextPage();
        break;
      default:
        break;
    }
  }

  const changeToCardView = () => {
    setViewType(constants.VIEW_TYPE_CARD);
  };

  const changeToListView = () => {
    setViewType(constants.VIEW_TYPE_LIST);
  };

  return (
    <SubscriptionContext.Provider value={{subscription, dispatch}}>
      <Container>
        <Menubar>
          <PressFilter>
            PressFilter
          </PressFilter>
          <ViewControl>
            <ViewType>
              <button onClick={changeToCardView}>CARD</button>
              <button onClick={changeToListView}>LIST</button>
            </ViewType>
            <PrevNext>
              <Prev><button onClick={handlePrevButton}>Prev</button></Prev>
              <Next><button onClick={handleNextButton}>Next</button></Next>
            </PrevNext>
          </ViewControl>
        </Menubar>
        <Contents
          viewType={viewType}
          pressListData={pressListData}
          pressId={pressIds[pressIndex]}
          page={page}
        />
      </Container>
    </SubscriptionContext.Provider>
  );
};

export default App;