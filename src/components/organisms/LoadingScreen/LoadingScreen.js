import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import loader from 'assets/loaders/loader.gif';
import { motion } from 'framer-motion';
import { loaderDelay } from 'assets/motion';
import { getIsTabletOrMobile } from 'redux/reducers/mediaReducer';

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

  // "postbuild": "react-snap",
  
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
        alt=''/>

    </StyledWrapper>
  );
};

const mapStateToProps = state => ({
  isTabletOrMobile: getIsTabletOrMobile(state),
});

LoadingScreen.propTypes = {
  isTabletOrMobile: PropTypes.bool.isRequired,
  showLoader: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps)(LoadingScreen);