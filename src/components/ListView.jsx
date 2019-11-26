import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ListItem from "./ListItem";
import DetailList from "./DetailList";

const Section = styled.section`
  width: 750px;
  height: 260px;
  display: flex;
  border: 1px solid #e6ecf0;
`;

const ListViewContent = styled.article`
  display: flex;
  flex: 1;
  padding: 10px;
`;

const ListViewNav = styled.nav`
  overflow-y: auto;
  padding: 10px 20px;
`;

const Thumb = styled.picture`
  width: 196px;
`;

const Image = styled.img`
  width: 100%;
`;

const Details = styled.div`
  padding: 0 10px 10px;
`;

const createInitialData = data => {
  return data.find(company => company.id == "025");
};

function ListView({ data, currentIndex, paginate }) {
  const [detailData, setDetailData] = useState(createInitialData(data));
  const [detailIdx, setDetailIdx] = useState(currentIndex);

  const handleCompanyClick = ({ id, idx }) => {
    const newDetailData = data.find(company => company.id == id);

    paginate(idx);
    setDetailIdx(idx);
    setDetailData({
      newslist: newDetailData.newslist,
      thumbnews: newDetailData.thumbnews
    });
  };

  const listViewDetail = data =>
    detailData && (
      <>
        <Thumb>
          <Image
            src={detailData.thumbnews.imageUrl}
            alt={detailData.thumbnews.text}
          />
          <p>{detailData.thumbnews.text}</p>
        </Thumb>
        <Details>
          <DetailList data={detailData} />
        </Details>
      </>
    );

  const isActive = index => detailIdx === index && true;

  useEffect(() => {
    const newDetailData = data[currentIndex];
    setDetailIdx(currentIndex);
    setDetailData({
      newslist: newDetailData.newslist,
      thumbnews: newDetailData.thumbnews
    });
  }, [currentIndex]);

  return (
    <Section>
      <ListViewNav>
        <ul>
          {data.map((item, index) => (
            <ListItem
              key={item.id}
              idx={index}
              data={item}
              isActive={isActive(index)}
              handleCompanyClick={handleCompanyClick}
            />
          ))}
        </ul>
      </ListViewNav>
      <ListViewContent>{listViewDetail(detailData)}</ListViewContent>
    </Section>
  );
}

export { ListView };
