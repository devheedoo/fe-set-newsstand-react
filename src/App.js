import React, { useState, useEffect, useReducer, createContext } from "react";
import styled from "styled-components";
import useFetch from "./hooks/useFetch";
import { Header, ViewType, GridView } from "./components";
import { GRID_VIEW_COUNT, API_BASE, VIEW_TYPES } from "./const";
import { BrowserRouter, Switch, Route } from "react-router-dom";

export const NewsStore = createContext();

const Main = styled.main`
  margin: 0 auto;
  max-width: 750px;
`;

const gridViewData = orgData => ({
  per: GRID_VIEW_COUNT,
  pageCount: Math.round(orgData.length / GRID_VIEW_COUNT)
});

const updateData = (prevState, payload) => {
  return prevState.map(state => {
    if (state.id !== payload.id) return state;
    return { ...state, ...payload };
  });
};

const reducer = (newsData, { type, payload }) => {
  switch (type) {
    case "FETCH_DATA":
      return [...payload];
    case "SUBSCRIBE":
      return updateData(newsData, payload);
    case "UNSUBSCRIBE":
      return updateData(newsData, payload);
    default:
      throw new Error();
  }
};

function App() {
  const [viewTypeInfo, setViewTypeInfo] = useState(VIEW_TYPES);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [newsData, dispatch] = useReducer(reducer, []);

  const isLoading = useFetch(dispatch, API_BASE);

  const handleChangeViewType = ({ target }) => {
    const changeType = viewTypeInfo.map(viewType => {
      viewType.type === target.value
        ? (viewType.isActive = true)
        : (viewType.isActive = false);

      return viewType;
    });

    setViewTypeInfo(changeType);
  };

  const lastOfIndex = newsData.filter(press => press.subscribed).length - 1;

  const paginate = index => {
    setCurrentIndex(index);
  };

  return (
    <NewsStore.Provider value={dispatch}>
      <BrowserRouter>
        <Main>
          <Header
            viewTypeInfo={viewTypeInfo}
            handleChangeViewType={handleChangeViewType}
            paginate={paginate}
            lastOfIndex={lastOfIndex}
            currentIndex={currentIndex}
          />
          <Switch>
            <Route exact path="/">
              <GridView data={newsData} gridViewData={gridViewData(newsData)} />
            </Route>
            <Route path="/all">
              <GridView data={newsData} gridViewData={gridViewData(newsData)} />
            </Route>
            <Route path="/subscribe">
              <ViewType
                viewTypeInfo={viewTypeInfo}
                isLoading={isLoading}
                newsData={newsData}
                currentIndex={currentIndex}
                paginate={paginate}
              />
            </Route>
            <Route path="*">
              <div>페이지를 찾을 수 없습니다.</div>
            </Route>
          </Switch>
        </Main>
      </BrowserRouter>
    </NewsStore.Provider>
  );
}

export default App;
