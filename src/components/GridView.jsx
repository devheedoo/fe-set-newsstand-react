import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Press } from "./";

const Section = styled.section`
  position: relative;
  width: 750px;
  display: flex;
`;

const Grid = styled.ul`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(3, 66px);
  grid-column-gap: 1px;
  grid-row-gap: 1px;
  background-color: var(--gridViewBorderColor);
  border: 1px solid var(--gridViewBorderColor);
`;

const GridItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
`;

const Pager = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
`;

const PagerPrev = styled(Pager)`
  left: 0;
`;

const PagerNext = styled(Pager)`
  right: 0;
`;

function GridView({ data, gridViewData }) {
  const [pageIdx, setPageIdx] = useState(1);

  const indexOfLast = pageIdx * gridViewData.per;
  const indexOfFirst = indexOfLast - gridViewData.per;
  const currentList = data.slice(indexOfFirst, indexOfLast);

  const handlePrevClick = e => {
    e.preventDefault();
    if (pageIdx <= 1) return false;

    setPageIdx(pageIdx - 1);
  };

  const handleNextClick = e => {
    e.preventDefault();
    if (pageIdx >= gridViewData.pageCount) return false;

    setPageIdx(pageIdx + 1);
  };

  return (
    <Section>
      <Grid>
        {currentList.map((item, index) => {
          return (
            <GridItem key={item.id} isSubscribed={item.subscribed}>
              {item.subscribed && <p>구독중</p>}
              <Press pressData={item} />
            </GridItem>
          );
        })}
      </Grid>
      <PagerPrev onClick={handlePrevClick}>이전목록</PagerPrev>
      <PagerNext onClick={handleNextClick}>다음목록</PagerNext>
    </Section>
  );
}

export { GridView };
