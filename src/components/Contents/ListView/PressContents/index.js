import React from 'react';
import styled, { css } from 'styled-components';

const PressContentsBox = styled.div`
  width: 550px;
  height: 200px;
  padding: 12px;
  background-color: lightgreen;
  display: flex;
  flex-direction: column;
`;

const PressNewsBox = styled.div`
  display: flex;
  height: 150px;
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

const PressBigNewsBox = styled.div`
  position: relative;
  width: 200px;
  background-color: cyan;
`;

const PressBigNewsTitle = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  background-color: rgba(0,0,0,0.3);
  width: 200px;
  height: 40px;
  padding: 4px;
  box-sizing: border-box;
  font-size: 12px;
  color: white;
`;

const PressBigNews = (props) => {
  const {thumbnews} = props;
  return (
    <PressBigNewsBox>
      <img style={{ height: '150px', width: '200px', }} src={thumbnews.imageUrl} title={thumbnews.text} />
      <PressBigNewsTitle>
        {thumbnews.text}
      </PressBigNewsTitle>
    </PressBigNewsBox>
  );
}

const NewsListBox = styled.div`
  width: 316px;
  height: 150px;
  box-sizing: border-box;
  font-size: 12px;
  text-decoration: none;
  color: black;
  padding-left: 12px;
`;

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
    <NewsListBox>
      <ul style={{
        padding: 0,
        margin: 0,
        listStyle: 'none',
        lineHeight: '24px',
      }}>
        {list}
      </ul>
    </NewsListBox>
  );
}

const News = (props) => {
  const {news} = props;
  return (
    <li><a href="#" title={news}>{news}</a></li>
  );
}

export default PressContents;
