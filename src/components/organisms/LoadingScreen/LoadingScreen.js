import React from 'react';
import styled from 'styled-components';
import loader from 'assets/loaders/loader.gif';

const StyledWrapper = styled.div`
  position: fixed;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  z-index: 200000;
  background-color: ${ ({ theme }) => theme.greyLight };
`;

const LoadingScreen = () => (
  <StyledWrapper>
    <img src={ loader } alt='loading'/>
  </StyledWrapper>
);

export default LoadingScreen;