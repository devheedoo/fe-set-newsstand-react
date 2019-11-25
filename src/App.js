import React, { useState, useEffect } from "react";
import styled from "styled-components";
import GlobalStyle from "./components/Styled/Global";
import { Header, ViewType } from "./components";
import { VIEW_TYPES, API_BASE } from "./const";
import useFetch from "./hooks/useFetch";

const Main = styled.main`
  margin: 0 auto;
  max-width: 750px;
`;

function App() {
  const [viewTypeInfo, setViewTypeInfo] = useState(VIEW_TYPES);
  const [newsData, setNewsData] = useState([]);

  const isLoading = useFetch(setNewsData, API_BASE);

  // @todo: radio 버튼을 사용하는 로직으로 변경
  const handleChangeViewType = e => {
    const changeType = viewTypeInfo.map(viewType => {
      viewType.type === e.target.dataset.type
        ? (viewType.isActive = true)
        : (viewType.isActive = false);

      return viewType;
    });

    setViewTypeInfo(changeType);
  };

  return (
    <Main>
      <GlobalStyle />
      <Header
        viewTypeInfo={viewTypeInfo}
        handleChangeViewType={handleChangeViewType}
      />
      <ViewType
        typeInfo={viewTypeInfo}
        isLoading={isLoading}
        newsData={newsData}
      />
    </Main>
  );
}

export default App;
