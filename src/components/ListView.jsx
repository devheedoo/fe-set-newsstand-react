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

function ListView({ data }) {
  const initialData = {
    newslist: [],
    thumbnews: {}
  };
  const [detailData, setDetailData] = useState(initialData);

  const handleCompanyClick = id => {
    const newDetailData = data.find(company => company.id == id);

    setDetailData({
      newslist: newDetailData.newslist,
      thumbnews: newDetailData.thumbnews
    });
  };

  useEffect(() => {}, []);

  return (
    <Section>
      <ListViewNav>
        <ul>
          {data.map(item => (
            <ListItem
              key={item.id}
              data={item}
              handleCompanyClick={handleCompanyClick}
            />
          ))}
        </ul>
      </ListViewNav>
      <ListViewContent>
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
      </ListViewContent>
    </Section>
  );
}

export { ListView };
