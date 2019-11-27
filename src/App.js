import React, { useState, useEffect } from "react";
import styled from "styled-components";
import useFetch from "./hooks/useFetch";
import { Header, ViewType, GridView } from "./components";
import { GRID_VIEW_COUNT, API_BASE, VIEW_TYPES } from "./const";
import { BrowserRouter, Switch, Route } from "react-router-dom";

const Main = styled.main`
  margin: 0 auto;
  max-width: 750px;
`;

const gridViewData = orgData => ({
  per: GRID_VIEW_COUNT,
  pageCount: Math.round(orgData.length / GRID_VIEW_COUNT)
});

function App() {
  const [viewTypeInfo, setViewTypeInfo] = useState(VIEW_TYPES);
  const [newsData, setNewsData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const isLoading = useFetch(setNewsData, API_BASE);

  const handleChangeViewType = ({ target }) => {
    const changeType = viewTypeInfo.map(viewType => {
      viewType.type === target.value
        ? (viewType.isActive = true)
        : (viewType.isActive = false);

      return viewType;
    });

    setViewTypeInfo(changeType);
  };

  const lastOfIndex = newsData.length - 1;

  const paginate = index => {
    setCurrentIndex(index);
  };

  return (
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
  );
}

export default App;
