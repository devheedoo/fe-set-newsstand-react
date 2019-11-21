import React, { useState, useEffect } from "react";
import styled from "styled-components";

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

const getDataFrom = (data, per) => {
  return data.filter((item, index) => index < per);
};

function GridView({ data, gridViewData }) {
  const initialData = getDataFrom(data, gridViewData.per);
  const [list, setList] = useState(initialData);
  const [pageIdx, setPageIdx] = useState(null);

  const handlePrevClick = e => {
    e.preventDefault();
    if (pageIdx <= 1) return false;
    // console.warn("pageIdx:", pageIdx);
    // console.warn("pageCount:", gridViewData.pageCount);

    setPageIdx(pageIdx - 1);
  };

  const handleNextClick = e => {
    e.preventDefault();
    // console.warn("current", pageIdx);
    if (pageIdx >= gridViewData.pageCount) return false;

    setPageIdx(pageIdx + 1);
    // console.warn("after pageIdx:", pageIdx);
  };

  useEffect(() => {
    // console.warn("first", list);
    setPageIdx(1);
  }, []);

  useEffect(() => {
    // console.log("useEffect", pageIdx);
    // console.log("gridViewData.per * pageIdx", gridViewData.per * pageIdx);
    // console.log(
    //   "gridViewData.per * (pageIdx + 1)",
    //   gridViewData.per * (pageIdx + 1)
    // );

    const result = data.filter((item, idx) => {
      const size = pageIdx - 1;
      if (
        idx >= gridViewData.per * size &&
        idx <= gridViewData.per * (size + 1)
      )
        return (
          idx >= gridViewData.per * size && idx < gridViewData.per * (size + 1)
        );
    });
    setList(result);
  }, [pageIdx]);

  return (
    <Section>
      <PagerPrev onClick={handlePrevClick}>이전목록</PagerPrev>
      <PagerNext onClick={handleNextClick}>다음목록</PagerNext>
      <Grid>
        {list.map((item, index) => {
          return (
            <GridItem key={item.id}>
              <img src={item.logoImgUrl} alt="" />
            </GridItem>
          );
        })}
      </Grid>
    </Section>
  );
}

export { GridView };
