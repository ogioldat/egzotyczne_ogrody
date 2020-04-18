import React, { useEffect, useState } from 'react';
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
  height: 100%;
  z-index: 200000;
  background-color: rgb(235,235,235);
  box-shadow: ${ ({ theme }) => theme.shadow };
`;

const StyledImg = styled.img`
  width: ${ ({ isTabletOrMobile }) => isTabletOrMobile && '100vw' };
`;

const LoadingScreen = ({ isTabletOrMobile, showLoader }) => {
  const [gif, setGif] = useState(null);
  useEffect(() => {
    if (showLoader) {
      setGif(loader);
    } else setGif(null);
  }, [showLoader]);

  return (
    <StyledWrapper
      initial="initial"
      animate="enter"
      exit="exit"
      transition={ loaderDelay.transition }
      variants={ loaderDelay.variants }>
      <StyledImg
        isTabletOrMobile={ isTabletOrMobile }
        src={ gif }
        alt='loading'/>

    </StyledWrapper>
  );
};

const mapStateToProps = state => ({
  isTabletOrMobile: getIsTabletOrMobile(state),
});

export default connect(mapStateToProps)(LoadingScreen);