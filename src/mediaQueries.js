const mediaQueries = {
  isDesktopOrLaptop: {
    query: '(min-device-width: 1224px)'
  },
  isBigScreen: {
    query: '(min-device-width: 1824px)'
  },
  isTabletOrMobile: {
    query: '(max-width: 1224px)'
  },
  isTabletOrMobileDevice: {
    query: '(max-device-width: 1224px)'
  },
  isPortrait: {
    query: '(orientation: portrait)'
  }
};

export default mediaQueries