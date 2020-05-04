import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import MenuView from 'views/MenuView';
import HeroTitle from 'components/molecules/HomeTitle/HeroTitle';
import heroImage from 'assets/images/heroImage.jpg';
import { getShowMenu } from 'redux/reducers/menuReducer';
import mobileBg from 'assets/images/mobileBg.png';
import { AnimatePresence } from 'framer-motion';
import MenuBar from 'components/molecules/MenuBar/MenuBar';
import CXMenuSocials from '../../atoms/CXMenuSocials/CXMenuSocials';
import { getIsTabletOrMobile } from 'redux/reducers/mediaReducer';
import { getIsPortrait } from '../../../redux/reducers/mediaReducer';


const StyledWrapper = styled.div`
  height: ${ ({ isPortrait, isTabletOrMobile }) => !isPortrait && isTabletOrMobile ? '120vh' : '100vh' };
  position: relative;
  overflow-y: hidden;
`;

const StyledCenterWrapper = styled.div`
  display: flex;
  position: ${ ({ isPortrait, isTabletOrMobile }) => (!isPortrait && isTabletOrMobile) && 'absolute' };
  top: 20%;
  height: calc(100vh - 60px);
  justify-content: space-between;
  align-items: center; 
`;

const StyledMobileBg = styled.img`
  position: absolute;
  width: 100vw;
  bottom: ${ ({ isPortrait }) => isPortrait ? '-80%' : '-10vh' };
  z-index: -12;
`;

const StyledHeroImage = styled.img`
  height: 100%;
  user-select: none;
`;


const StyledTitleWrapper = styled.div`
  ${ ({ isTabletOrMobile }) => isTabletOrMobile ?
  css`
    margin: 0 0 auto 0;
` :
  css`
    height: 60%;
    width: 100%;
    justify-content: center;
    align-items: flex-start;
`
};

  display: flex;
  position:relative;
`;


const HomeSection = ({ showMenu, isTabletOrMobile, isPortrait }) => (
  <StyledWrapper isPortrait={ isPortrait } isTabletOrMobile={ isTabletOrMobile }>
    <MenuBar showMenu={ showMenu } isTabletOrMobile={ isTabletOrMobile }/>

    <AnimatePresence>
      {
        showMenu && <MenuView/>
      }
    </AnimatePresence>

    <StyledCenterWrapper isPortrait={ isPortrait } isTabletOrMobile={ isTabletOrMobile }>
      <StyledTitleWrapper isPortrait={ isPortrait } isTabletOrMobile={ isTabletOrMobile }>
        <HeroTitle/>
        <CXMenuSocials lines={ false } isTabletOrMobile={ isTabletOrMobile }/>
      </StyledTitleWrapper>

      {
        (isTabletOrMobile && isPortrait) ?
          <StyledMobileBg src={ mobileBg }/>
          : <StyledHeroImage alt='' src={ heroImage }/>

      }

    </StyledCenterWrapper>
  </StyledWrapper>
);

const mapStateToProps = state => ({
  showMenu: getShowMenu(state),
  isTabletOrMobile: getIsTabletOrMobile(state),
  isPortrait: getIsPortrait(state),
});

HomeSection.propTypes = {
  showMenu: PropTypes.bool.isRequired,
  isTabletOrMobile: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps)(HomeSection);