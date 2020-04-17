import React from 'react';
import styled from 'styled-components';
import loader from 'assets/loaders/loader.gif';
import { motion } from 'framer-motion';
import { loaderDelay } from '../../../assets/motion';
import { getIsTabletOrMobile } from '../../../redux/reducers/mediaReducer';
import { connect } from 'react-redux';

const StyledWrapper = styled(motion.div)`
  position: fixed;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  z-index: 200000;
  background-color: ${ ({ theme }) => theme.greyLight };
`;

const StyledImg = styled.img`
  width: ${ ({ isTabletOrMobile }) => isTabletOrMobile && '100vw' };
`;

const LoadingScreen = ({ isTabletOrMobile }) => (
  <StyledWrapper
    initial="initial"
    animate="enter"
    exit="exit"
    transition={ loaderDelay.transition }
    variants={ loaderDelay.variants }>
    <StyledImg
      isTabletOrMobile={ isTabletOrMobile }
      src={ loader }
      alt='loading'/>
  </StyledWrapper>
);

const mapStateToProps = state => ({
  isTabletOrMobile: getIsTabletOrMobile(state),
});

export default connect(mapStateToProps)(LoadingScreen);