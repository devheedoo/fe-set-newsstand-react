import React, { useState, useEffect } from "react";
import { ListView, GridView } from "./";
import { GRID_VIEW_COUNT } from "../const";

const gridViewData = orgData => {
  return {
    per: GRID_VIEW_COUNT,
    pageCount: Math.round(orgData.length / GRID_VIEW_COUNT)
  };
};

const ViewType = ({ typeInfo, isLoading, newsData }) => {
  const { type } = typeInfo.filter(viewType => viewType.isActive === true)[0];

  const views = type => {
    switch (type) {
      case "list":
        return <ListView data={newsData} />;
        break;

      case "grid":
        return (
          <GridView data={newsData} gridViewData={gridViewData(newsData)} />
        );
        break;
      default:
        return <ListView data={newsData} />;
        break;
    }
  };

  return <>{isLoading ? <div>loading...</div> : views(type)}</>;
};

export { ViewType };
