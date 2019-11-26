import React, { useState, useEffect } from "react";
import { ListView, GridView } from "./";
import { GRID_VIEW_COUNT } from "../const";

const gridViewData = orgData => {
  return {
    per: GRID_VIEW_COUNT,
    pageCount: Math.round(orgData.length / GRID_VIEW_COUNT)
  };
};

const ViewType = ({
  typeInfo,
  isLoading,
  newsData,
  currentIndex,
  paginate
}) => {
  const { type } = typeInfo.filter(viewType => viewType.isActive === true)[0];

  const views = type => {
    switch (type) {
      case "list":
        return (
          <ListView
            data={newsData}
            currentIndex={currentIndex}
            paginate={paginate}
          />
        );
        break;

      case "grid":
        return (
          <GridView data={newsData} gridViewData={gridViewData(newsData)} />
        );
        break;
      default:
        return <div>리스트 모양이 없네요!</div>;
        break;
    }
  };

  return <>{isLoading ? <div>loading...</div> : views(type)}</>;
};

export { ViewType };
