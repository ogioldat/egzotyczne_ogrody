export const SET_IS_DESKTOP_OT_LAPTOP = 'SET_IS_DESKTOP_OT_LAPTOP';
export const SET_IS_BIG_SCREEN = 'SET_IS_BIG_SCREEN';
export const SET_IS_TABLET_OR_MOBILE = 'SET_IS_TABLET_OR_MOBILE';
export const SET_IS_TABLET_OR_MOBILE_DEVICE = 'SET_IS_TABLET_OR_MOBILE_DEVICE';
export const SET_IS_PORTRAIT = 'SET_IS_PORTRAIT';

export const setIsDesktopOrLaptop = bool => (
  {
    type: SET_IS_DESKTOP_OT_LAPTOP,
    payload: bool
  });
export const setIsBigScreen = bool => (
  {
    type: SET_IS_BIG_SCREEN,
    payload: bool
  });
export const setTabletOrMobile = bool => (
  {
    type: SET_IS_TABLET_OR_MOBILE,
    payload: bool
  });
export const setTabletOrMobileDevice = bool => (
  {
    type: SET_IS_TABLET_OR_MOBILE_DEVICE,
    payload: bool
  });
export const setPortrait = bool => (
  {
    type: SET_IS_PORTRAIT,
    payload: bool
  });