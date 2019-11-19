import React from "react";
import styled from "styled-components";
import { usePressState, usePressDispatch } from "../PressContext";

const News = () => {
  const initialData = {
    company: "SBS",
    id: "055",
    logoImgUrl:
      "https://s.pstatic.net/static/newsstand/up/2017/0424/nsd173335676.png",
    newslist: [
      "'교량 1개' 섬 안 폐농장까지 번진 돼지열병…의문의 확산",
      "이부진 이혼 소송 2심 '이혼하고 임우재에 141억 지급'",
      "'아빠는 누구?'…암컷뿐인 수족관서 태어난 새끼 상어",
      "여성 신체 변태적 훼손·살해…50대 남성 징역 25년",
      "유엔 연설로 엿본 트럼프 머릿속, 북한은 4번째?",
      "'144만 명 복용' 잔탁 등 269개 판매 중지…발암 우려"
    ],
    thumbnews: {
      imageUrl:
        "https://s.pstatic.net/static/newsstand/2019/0926/article_img/9013/174253_001.jpg",
      text: "'압수수색 검사와 통화' 조국 발언에 술렁…고성 · 야유"
    }
  };

  const NewsContainer = styled.div`
    width: 85%;
    background-color: #ffdc34;
    display: flex;
    flex-flow: column;
    padding: 2rem;
    justify-content: space-around;
    color: #110133;
  `;

  const TopSection = styled.div`
    display: flex;
    height: 10%;
  `;

  const BottomSection = styled.div`
    display: flex;
    height: 80%;
  `;

  const LogoImg = styled.img`
    width: 100px;
  `;

  const ThumbSection = styled.div`
    width: 35%;
    position: relative;
  `;

  const ThumbImg = styled.img`
    width: 100%;
    padding-top: 1rem;
  `;

  const ThumbCaption = styled.p`
    position: absolute;
    width: 100%;
    bottom: 1rem;
    background-color: rgb(0, 0, 0, 0.7);
    color: white;
  `;
  const NewsListSection = styled.ul`
    display: flex;
    flex-flow: column;
    justify-content: space-evenly;
    align-items: left;
    padding-left: 1rem;
    height: 100%;
  `;

  const newsList = usePressState().showData;

  if (newsList) {
    return (
      <>
        <NewsContainer key={newsList.id}>
          <TopSection>
            <LogoImg src={newsList.logoImgUrl} />
          </TopSection>
          <BottomSection>
            <ThumbSection>
              <ThumbImg src={newsList.thumbnews.imageUrl} />
              <ThumbCaption>{newsList.thumbnews.text} </ThumbCaption>
            </ThumbSection>
            <NewsListSection>
              {newsList.newslist.map((news, idx) => (
                <li key={idx}>{news}</li>
              ))}
            </NewsListSection>
          </BottomSection>
        </NewsContainer>
      </>
    );
  } else {
    return (
      <>
        <NewsContainer key={initialData.id}>
          <TopSection>
            <LogoImg src={initialData.logoImgUrl} />
          </TopSection>
          <BottomSection>
            <ThumbSection>
              <ThumbImg src={initialData.thumbnews.imageUrl} />
              <ThumbCaption>{initialData.thumbnews.text} </ThumbCaption>
            </ThumbSection>
            <NewsListSection>
              {initialData.newslist.map((news, idx) => (
                <li key={idx}>{news}</li>
              ))}
            </NewsListSection>
          </BottomSection>
        </NewsContainer>
      </>
    );
  }
};

export default News;
