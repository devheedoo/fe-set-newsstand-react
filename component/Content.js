import React from 'react';
import Press from './Press';
import News from './News';
import styled from 'styled-components'

const Content = () => {
  const ContentContainer = styled.div`
    display: flex;
    width: 100%;
    height: 85%;
  `;

  return (
    <ContentContainer>
      <Press />
      <News />
    </ContentContainer>
  );
};

export default Content;