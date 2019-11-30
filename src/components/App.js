import React from 'react';
import styled, { css } from 'styled-components';

// Container
const Container = styled.div`
  display: flex;
  background-color: pink;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

// Menubar (상단)
const Menubar = styled.div`
  display: flex;
  height: 50px;
  width: 780px;
  background-color: brown;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`;

const PressFilter = styled.div`
  flex: 0 0 300px;
  background-color: gray;
`;

const ViewControl = styled.div`
  flex: 0 0 300px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  background-color: blue;
`;

const ViewType = styled.div`
  flex: 0 0 100px;
  background-color: green;
`;

const PrevNext = styled.div`
  flex: 0 0 100px;
  background-color: lightgreen;
  display: flex;
`;

const Prev = styled.div`
  flex: 0 0 45px;
`;

const Next = styled.div`
  flex: 0 0 45px;
`;

// Contents (하단)
const Contents = styled.div`
  display: flex;
  width: 780px;
  height: 700px;
  background-color: orange;
  flex-direction: column;
  align-items: center;
`;

const ListView = styled.div`
  width: 700px;
  height: 300px;
  background-color: yellow;
  display: flex;
`;

const PressList = styled.div`
  flex: 0 0 150px;
  background-color: lightblue;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Press = styled.div``;

const PressContents = styled.div`
  flex: 0 0 550px;
  background-color: lightgreen;
  display: flex;
  flex-direction: column;
`;

const PressInfo = styled.div`
  background-color: skyblue;
`;

const PressNews = styled.div`
  display: flex;
`;

const PressBigNews = styled.div`
  flex: 0 0 150px;
  background-color: cyan;
`;

const NewsList = styled.div``;

const News = styled.div``;

const CardView = styled.div`
  height: 300px;
  width: 700px;
  background-color: purple;
  display: flex;
  flex-wrap: wrap;
  overflow: hidden;
  position: relative;
`;

const PressCard = styled.div`
  height: 100px;
  flex: 0 0 150px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PressLogo = styled.div`
  position: absolute;
  flex: 0 0 50px;
`;

const PressOption = styled.div`
  position: absolute;
  flex: 0 0 50px;
  display: flex;
  flex-direction: row;
`;

const PubSubButton = styled.div`
  background-color: lightgreen;
`;

const PressNewsButton = styled.div`
  background-color: lightblue;
`;

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: ${props => props.color ? props.color : "black"};
`;

const App = props => {
  return (
    <Container>
      <Menubar>
        <PressFilter>
          PressFilter
        </PressFilter>
        <ViewControl>
          <ViewType>
            ViewType
          </ViewType>
          <PrevNext>
            <Prev>Prev</Prev>
            <Next>Next</Next>
          </PrevNext>
        </ViewControl>
      </Menubar>
      <Contents>
        <ListView>
          <PressList>
            <Press>Press1</Press>
            <Press>Press2</Press>
            <Press>Press3</Press>
            <Press>Press4</Press>
            <Press>Press5</Press>
          </PressList>
          <PressContents>
            <PressInfo>
              PressInfo
            </PressInfo>
            <PressNews>
              <PressBigNews>
                PressBigNews
              </PressBigNews>
              <NewsList>
                <News>News1</News>
                <News>News2</News>
                <News>News3</News>
                <News>News4</News>
                <News>News5</News>
              </NewsList>
            </PressNews>
          </PressContents>
        </ListView>
        <CardView>
          <PressCard>
            <PressLogo>
              PressLogo1
            </PressLogo>
            <PressOption>
              <PubSubButton>구독</PubSubButton>
              <PressNewsButton>기사보기</PressNewsButton>
            </PressOption>
          </PressCard>
          <PressCard>
            <PressLogo>
              PressLogo2
            </PressLogo>
            <PressOption>
              <PubSubButton>구독</PubSubButton>
              <PressNewsButton>기사보기</PressNewsButton>
            </PressOption>
          </PressCard>
          <PressCard>
            <PressLogo>
              PressLogo3
            </PressLogo>
            <PressOption>
              <PubSubButton>구독</PubSubButton>
              <PressNewsButton>기사보기</PressNewsButton>
            </PressOption>
          </PressCard>
          <PressCard>
            <PressLogo>
              PressLogo4
            </PressLogo>
            <PressOption>
              <PubSubButton>구독</PubSubButton>
              <PressNewsButton>기사보기</PressNewsButton>
            </PressOption>
          </PressCard>
          <PressCard>
            <PressLogo>
              PressLogo5
            </PressLogo>
            <PressOption>
              <PubSubButton>구독</PubSubButton>
              <PressNewsButton>기사보기</PressNewsButton>
            </PressOption>
          </PressCard>
          <PressCard>
            <PressLogo>
              PressLogo6
            </PressLogo>
            <PressOption>
              <PubSubButton>구독</PubSubButton>
              <PressNewsButton>기사보기</PressNewsButton>
            </PressOption>
          </PressCard>
          <PressCard>
            <PressLogo>
              PressLogo7
            </PressLogo>
            <PressOption>
              <PubSubButton>구독</PubSubButton>
              <PressNewsButton>기사보기</PressNewsButton>
            </PressOption>
          </PressCard>
          <PressCard>
            <PressLogo>
              PressLogo8
            </PressLogo>
            <PressOption>
              <PubSubButton>구독</PubSubButton>
              <PressNewsButton>기사보기</PressNewsButton>
            </PressOption>
          </PressCard>
          <PressCard>
            <PressLogo>
              PressLogo9
            </PressLogo>
            <PressOption>
              <PubSubButton>구독</PubSubButton>
              <PressNewsButton>기사보기</PressNewsButton>
            </PressOption>
          </PressCard>
          <PressCard>
            <PressLogo>
              PressLogo10
            </PressLogo>
            <PressOption>
              <PubSubButton>구독</PubSubButton>
              <PressNewsButton>기사보기</PressNewsButton>
            </PressOption>
          </PressCard>
          <PressCard>
            <PressLogo>
              PressLogo11
            </PressLogo>
            <PressOption>
              <PubSubButton>구독</PubSubButton>
              <PressNewsButton>기사보기</PressNewsButton>
            </PressOption>
          </PressCard>
          <PressCard>
            <PressLogo>
              PressLogo12
            </PressLogo>
            <PressOption>
              <PubSubButton>구독</PubSubButton>
              <PressNewsButton>기사보기</PressNewsButton>
            </PressOption>
          </PressCard>
          <PressCard>
            <PressLogo>
              PressLogo13
            </PressLogo>
            <PressOption>
              <PubSubButton>구독</PubSubButton>
              <PressNewsButton>기사보기</PressNewsButton>
            </PressOption>
          </PressCard>
          <PressCard>
            <PressLogo>
              PressLogo14
            </PressLogo>
            <PressOption>
              <PubSubButton>구독</PubSubButton>
              <PressNewsButton>기사보기</PressNewsButton>
            </PressOption>
          </PressCard>
          <PressCard>
            <PressLogo>
              PressLogo15
            </PressLogo>
            <PressOption>
              <PubSubButton>구독</PubSubButton>
              <PressNewsButton>기사보기</PressNewsButton>
            </PressOption>
          </PressCard>
          <PressCard>
            <PressLogo>
              PressLogo16
            </PressLogo>
            <PressOption>
              <PubSubButton>구독</PubSubButton>
              <PressNewsButton>기사보기</PressNewsButton>
            </PressOption>
          </PressCard>
          <PressCard>
            <PressLogo>
              PressLogo17
            </PressLogo>
            <PressOption>
              <PubSubButton>구독</PubSubButton>
              <PressNewsButton>기사보기</PressNewsButton>
            </PressOption>
          </PressCard>
          <PressCard>
            <PressLogo>
              PressLogo18
            </PressLogo>
            <PressOption>
              <PubSubButton>구독</PubSubButton>
              <PressNewsButton>기사보기</PressNewsButton>
            </PressOption>
          </PressCard>
          <PressCard>
            <PressLogo>
              PressLogo19
            </PressLogo>
            <PressOption>
              <PubSubButton>구독</PubSubButton>
              <PressNewsButton>기사보기</PressNewsButton>
            </PressOption>
          </PressCard>
          <PressCard>
            <PressLogo>
              PressLogo20
            </PressLogo>
            <PressOption>
              <PubSubButton>구독</PubSubButton>
              <PressNewsButton>기사보기</PressNewsButton>
            </PressOption>
          </PressCard>
        </CardView>
      </Contents>
    </Container>
  );
};

export default App;