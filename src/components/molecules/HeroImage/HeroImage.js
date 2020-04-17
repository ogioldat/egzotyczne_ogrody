import React from 'react';
import styled from 'styled-components';
import plantCropped from 'assets/images/plantCropped.png';

const StyledWrapper = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  z-index: -2;
  bottom: 0;
  right: 0;
  overflow-y: auto;
`;

const StyledImage = styled.img`
  height: 80vh;
  position: absolute;
  right: 0;
  bottom: 0;
`;

const HeroImage = () => (
  <StyledWrapper>
    <StyledImage src={ plantCropped }/>
  </StyledWrapper>
);

export default HeroImage;