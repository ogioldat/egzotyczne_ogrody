import React from 'react';
import styled from 'styled-components';
import Subtitle from '../../atoms/Subtitle/Subtitle';
import Button from '../../atoms/Button/Button';
import { connect } from 'react-redux';
import { getIsTabletOrMobile } from '../../../redux/reducers/mediaReducer';

const StyledWrapper = styled.div`
  height: 7%;
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
  margin: 0;
  color: ${ ({ theme }) => theme.inactive };
  font-size: ${ ({ theme, isTabletOrMobile }) => isTabletOrMobile ? theme.fontSize.xxs : theme.fontSize.s };
`;

const StyledOK = styled(Button)`
  background-color: ${ ({ theme }) => theme.greyLight };
  padding: 10px 20px;
  border-radius: 12px;
`;

const CookieAlert = ({isTabletOrMobile, accept}) => {
  const setLocalStorage = () => {
    window.localStorage.setItem('cookie-alert', 'accepted')
  }

  return (
    <StyledWrapper>
      <StyledSubtitle isTabletOrMobile={isTabletOrMobile}>strona używa plików cookies 🍪</StyledSubtitle>
      <StyledOK onClick={() => {
        accept(true);
        setLocalStorage();
      }} secondary>OK</StyledOK>
    </StyledWrapper>
  )
};

const mapStateToProps = state => ({
  isTabletOrMobile: getIsTabletOrMobile(state)
})

export default connect(mapStateToProps)(CookieAlert);