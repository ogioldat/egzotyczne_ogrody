export const FETCH_PHOTOS_PENDING = 'FETCH_PHOTOS_PENDING';
export const FETCH_PHOTOS_SUCCESS = 'FETCH_PHOTOS_SUCCESS';
export const FETCH_PHOTOS_FAILURE = 'FETCH_PHOTOS_FAILURE';
export const SET_CURRENT_PHOTO = 'SET_CURRENT_PHOTO';
export const CHANGE_PHOTO = 'CHANGE_PHOTO';
export const TOGGLE_MODAL = 'TOGGLE_MODAL';

export const fetchPhotosPending = () => ({
  type: FETCH_PHOTOS_PENDING,
});

export const fetchPhotosSuccess = photos => ({
  type: FETCH_PHOTOS_SUCCESS,
  payload: photos,
});

export const fetchPhotosFailure = error => ({
  type: FETCH_PHOTOS_FAILURE,
  payload: error,
});

export const setCurrentPhoto = index => ({
  type: SET_CURRENT_PHOTO,
  payload: index
});

export const changePhoto = direction => ({
  type: CHANGE_PHOTO,
  payload: direction
});

export const toggleModal = bool => ({
  type: TOGGLE_MODAL,
  payload: bool
});
