import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
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
import { routes } from '../routes';

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
  const { pathname } = useLocation();

  useEffect(() => {
    if (showMenu) {
      targetElement.style.overflowY = 'hidden';
      if (isTabletOrMobile) {
        targetElement.style.position = 'fixed';
      }
    } else {
      targetElement.style.overflowY = 'visible';
      if (isTabletOrMobile) {
        targetElement.style.position = 'relative';
      }
    }

  }, [showMenu]);

  useEffect(() => {
    if (pathname !== routes.home) {
      window.scrollTo(0, 0);
    }

    if (isTabletOrMobile) {
      if (pathname === (routes.gallery || routes.plantDetails)) {
        targetElement.style.overflow = 'hidden';
      } else {
        targetElement.style.overflow = 'visible';
      }
    }

    if(pathname === routes.gallery){
      targetElement.style.position = '';
    }
  }, [pathname]);


  return (
    <>
      <GlobalStyle/>
      <ThemeProvider theme={ theme }>
        {
          children
        }
      </ThemeProvider>
    </>
  );
};

MainTemplate.propTypes = {
  showMenu: PropTypes.bool.isRequired,
  children: PropTypes.element.isRequired,
  setIsDesktopOrLaptop: PropTypes.func.isRequired,
  setIsBigScreen: PropTypes.func.isRequired,
  setTabletOrMobile: PropTypes.func.isRequired,
  setTabletOrMobileDevice: PropTypes.func.isRequired,
  setPortrait: PropTypes.func.isRequired,
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