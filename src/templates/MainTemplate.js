import React, { useEffect, useState } from 'react';
import GlobalStyle from 'theme/GlobalStyles';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { ThemeProvider } from 'styled-components';
import theme from 'theme/MainTheme';
import { useMediaQuery } from 'react-responsive';
import {
  setIsDesktopOrLaptop as setIsDesktopOrLaptopAction,
  setIsBigScreen as setIsBigScreenAction,
  setTabletOrMobile as setTabletOrMobileAction,
  setTabletOrMobileDevice as setTabletOrMobileDeviceAction,
  setPortrait as setPortraitAction,
} from 'redux/actions/mediaActions';
import { getShowMenu } from '../redux/reducers/menuReducer';
import mediaQueries from '../mediaQueries';
import { AnimatePresence } from 'framer-motion';
import LoadingScreen from 'components/organisms/LoadingScreen/LoadingScreen';

const MainTemplate = (
  {
    showMenu,
    children,
    setIsDesktopOrLaptop,
    setIsBigScreen,
    setTabletOrMobile,
    setTabletOrMobileDevice,
    setPortrait,
  },
) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const isDesktopOrLaptop = useMediaQuery(mediaQueries.isDesktopOrLaptop);
  const isBigScreen = useMediaQuery(mediaQueries.isBigScreen);
  const isTabletOrMobile = useMediaQuery(mediaQueries.isTabletOrMobile);
  const isTabletOrMobileDevice = useMediaQuery(mediaQueries.isTabletOrMobileDevice);
  const isPortrait = useMediaQuery(mediaQueries.isPortrait);

  useEffect(() => {
    setIsDesktopOrLaptop(isDesktopOrLaptop);
    setIsBigScreen(isBigScreen);
    setTabletOrMobile(isTabletOrMobile);
    setTabletOrMobileDevice(isTabletOrMobileDevice);
    setPortrait(isPortrait);
  });

  const body = document.querySelector('body');
  const [targetElement] = useState(body);

  useEffect(() => {
    if (showMenu || !loaded) {
      targetElement.style.overflow = 'hidden';
    } else {
      targetElement.style.overflow = 'visible';
    }

  }, [showMenu, loaded]);

  const [showLoader, toggleLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      toggleLoader(false);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <GlobalStyle/>
      <ThemeProvider theme={ theme }>
        <AnimatePresence>
          {
            showLoader && <LoadingScreen />
          }
        </AnimatePresence>
          {
            children
          }
      </ThemeProvider>
    </>
  );
};

MainTemplate.propTypes = {
  children: PropTypes.element.isRequired,
};

const mapDispatchToProps = dispatch => ({
  setIsDesktopOrLaptop: bool => dispatch(setIsDesktopOrLaptopAction(bool)),
  setIsBigScreen: bool => dispatch(setIsBigScreenAction(bool)),
  setTabletOrMobile: bool => dispatch(setTabletOrMobileAction(bool)),
  setTabletOrMobileDevice: bool => dispatch(setTabletOrMobileDeviceAction(bool)),
  setPortrait: bool => dispatch(setPortraitAction(bool)),
});

const mapStateToProps = state => ({
  showMenu: getShowMenu(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(MainTemplate));