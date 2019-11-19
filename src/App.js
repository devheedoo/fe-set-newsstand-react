import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Nav from "../component/Nav";
import styles from "./App.css";
import Content from "../component/Content";
import { PressProvider } from "../PressContext";

const App = () => {
  const Container = styled.div`
    width: 70vw;
    margin: 50px auto;
    height: 400px;
    background-color: #110133;
    color: white;
  `;

  return (
    <PressProvider>
      <Container>
        <Nav />
        <Content />
      </Container>
    </PressProvider>
  );
};

export default App;
