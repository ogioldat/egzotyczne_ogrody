import React from 'react';
import styled from 'styled-components';
import Subtitle from '../../atoms/Subtitle/Subtitle';
import Button from '../../atoms/Button/Button';

const StyledWrapper = styled.div`
  height: 80px;
  margin: auto;
  width: 97vw;
  border-radius: 12px;
  box-shadow: ${ ({ theme }) => theme.shadow };
  background-color: ${ ({ theme }) => theme.greyLight };
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  z-index: 123123;
  padding: 0 3%;
  bottom: 20px;
  left: 0;
  right: 0;
`;

const StyledSubtitle = styled(Subtitle)`
  //color: white;
  margin: 0;
  // color: ${ ({ theme }) => theme.grey };
  font-size: ${({theme}) => theme.fontSize.s};
`;

const StyledOK = styled(Button)`
  background-color: ${ ({ theme }) => theme.greyLight };
  padding: 10px 20px;
  border-radius: 12px;
`

const CookieAlert = () => (
  <StyledWrapper>
    <StyledSubtitle>ta strona używa plików cookies</StyledSubtitle>
    <StyledOK secondary>OK</StyledOK>
  </StyledWrapper>
);

export default CookieAlert;