import React from 'react';
import styled from 'styled-components'
import Nav from '../component/Nav';
import styles from './App.css';
import Content from '../component/Content';

const App = () => {
  const Container = styled.div`
    width: 70vw;
    margin: 50px auto;
    height: 400px;
    background-color: #110133;
    color: white;
  `

  return (
    <Container>
      <Nav />
      <Content />
    </Container>
  );
};

export default App;