import React from 'react';
import styled, { css } from 'styled-components';

import CardView from './Contents/CardView';

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
        <CardView />
      </Contents>
    </Container>
  );
};

export default App;