import React from "react";
import { ListView, GridView } from ".";
import { GRID_VIEW_COUNT } from "../const";

const gridViewData = orgData => ({
  per: GRID_VIEW_COUNT,
  pageCount: Math.round(orgData.length / GRID_VIEW_COUNT)
});

const ViewType = ({
  viewTypeInfo,
  isLoading,
  newsData,
  currentIndex,
  paginate
}) => {
  const { type } = viewTypeInfo.filter(
    viewType => viewType.isActive === true
  )[0];

  const myNewsData = newsData.filter(press => press.subscribed);

  const views = type => {
    if (!myNewsData.length) return <div>구독중인 언론사가 없습니다.</div>;

    switch (type) {
      case "list":
        return (
          <ListView
            data={myNewsData}
            currentIndex={currentIndex}
            paginate={paginate}
          />
        );

      case "grid":
        return (
          <GridView data={myNewsData} gridViewData={gridViewData(newsData)} />
        );

      default:
        return <div>리스트 모양이 없네요!</div>;
    }
  };

  return <>{isLoading ? <div>loading...</div> : views(type)}</>;
};

export { ViewType };
