import React from 'react';
import styled, { css } from 'styled-components';

const PressContentsBox = styled.div`
  flex: 0 0 550px;
  background-color: lightgreen;
  display: flex;
  flex-direction: column;
`;

const NewsListBox = styled.div`
`;

const PressNewsBox = styled.div`
  display: flex;
`;

const PressBigNewsBox = styled.div`
  flex: 0 0 150px;
  background-color: cyan;
`;

const PressContents = (props) => {
  const {contents} = props;
  const info = {
    company: contents.company,
    logoImgUrl: contents.logoImgUrl,
  }
  return (
    <PressContentsBox>
      <PressInfo info={info} />
      <PressNewsBox>
        <PressBigNews thumbnews={contents.thumbnews} />
        <NewsList newslist={contents.newslist} />
      </PressNewsBox>
    </PressContentsBox>
  );
};

const PressInfo = (props) => {
  const {info} = props;
  return (
    <div>
    <img src={info.logoImgUrl} title={info.company} />
    </div>
  );
}

const PressBigNews = (props) => {
  const {thumbnews} = props;
  return (
    <PressBigNewsBox>
      <img src={thumbnews.imageUrl} title={thumbnews.text} />
      <p>{thumbnews.text}</p>
    </PressBigNewsBox>
  );
}

const NewsList = (props) => {
  const {newslist} = props;
  const list = [];
  newslist.map((news, index) => {
    list.push(
      <News
        key={"news_" + (index + 1)}
        news={news}
      />
    )
  });
  return (
    <NewsListBox>{list}</NewsListBox>
  );
}

const News = (props) => {
  const {news} = props;
  return (
    <div>
    <a href="#" title={news}>{news}</a>
    </div>
  );
}

export default PressContents;
