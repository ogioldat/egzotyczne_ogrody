import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import MenuView from 'views/MenuView';
import HeroTitle from 'components/molecules/HomeTitle/HeroTitle';
import heroImage from 'assets/images/heroImage.jpg';
import { getShowMenu } from 'redux/reducers/menuReducer';
import mobileBg from 'assets/images/mobileBg.png';
import { motion, AnimatePresence } from 'framer-motion';
import MenuBar from 'components/molecules/MenuBar/MenuBar';
import { getIsTabletOrMobile } from 'redux/reducers/mediaReducer';


const StyledWrapper = styled(motion.div)`
  height: 100vh;
  position: relative;
  overflow-y: hidden;
`;

const StyledCenterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start; 
`;

const StyledMobileBg = styled.img`
  position: absolute;
  width: 100vw;
  bottom: -5%;
`;

const StyledHeroImage = styled.img`
  height: 100%;
`;

const StyledTitleWrapper = styled.div`
  display: flex;
  width: 100%;
  margin: auto 0 20% 0;
  justify-content: center;
  align-items: center;
`;

const HomeSection = ({ showMenu, isTabletOrMobile }) => (
  <StyledWrapper>
    <MenuBar showMenu={ showMenu } isTabletOrMobile={ isTabletOrMobile }/>

    <AnimatePresence>
      {
        showMenu && <MenuView/>
      }
    </AnimatePresence>

    <StyledCenterWrapper>
      <StyledTitleWrapper>
        <HeroTitle/>
      </StyledTitleWrapper>

      {
        isTabletOrMobile ?
          <StyledMobileBg src={ mobileBg }/>
          : <StyledHeroImage alt='' src={ heroImage }/>
      }
    </StyledCenterWrapper>
  </StyledWrapper>
);

const mapStateToProps = state => ({
  showMenu: getShowMenu(state),
  isTabletOrMobile: getIsTabletOrMobile(state),
});

HomeSection.propTypes = {
  showMenu: PropTypes.bool.isRequired,
  isTabletOrMobile: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps)(HomeSection);