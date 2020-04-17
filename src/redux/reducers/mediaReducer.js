import {
  SET_IS_DESKTOP_OT_LAPTOP,
  SET_IS_BIG_SCREEN,
  SET_IS_TABLET_OR_MOBILE,
  SET_IS_TABLET_OR_MOBILE_DEVICE,
  SET_IS_PORTRAIT,
} from 'redux/actions/mediaActions';

const initialState = {
  isDesktopOrLaptop: false,
  isBigScreen: false,
  isTabletOrMobile: false,
  isTabletOrMobileDevice: false,
  isPortrait: false,
};

export const media = (state = initialState, action) => {
  switch (action.type) {
    default: {
      return {
        ...state,
      };
    }

    case(SET_IS_DESKTOP_OT_LAPTOP): {
      return {
        ...state,
        isDesktopOrLaptop: action.payload
      };
    }

    case(SET_IS_BIG_SCREEN): {
      return {
        ...state,
        isBigScreen: action.payload
      };
    }

    case(SET_IS_TABLET_OR_MOBILE): {
      return {
        ...state,
        isTabletOrMobile: action.payload
      };
    }

    case(SET_IS_TABLET_OR_MOBILE_DEVICE): {
      return {
        ...state,
        isTabletOrMobileDevice: action.payload
      };
    }

    case(SET_IS_PORTRAIT): {
      return {
        ...state,
        isPortrait: action.payload
      };
    }
  }
};

export const getIsDesktopOrLaptop = state => state.media.isDesktopOrLaptop;
export const getIsBigScreen = state => state.media.isBigScreen;
export const getIsTabletOrMobile = state => state.media.isTabletOrMobile;
export const getIsTabletOrMobileDevice = state => state.media.isTabletOrMobileDevice;
export const getIsPortrait = state => state.media.isPortrait;