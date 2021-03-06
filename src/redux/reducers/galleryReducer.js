import {
  FETCH_PHOTOS_PENDING,
  FETCH_PHOTOS_SUCCESS,
  FETCH_PHOTOS_FAILURE,
  SET_CURRENT_PHOTO,
  CHANGE_GALLERY_PHOTO,
  TOGGLE_MODAL,
} from 'redux/actions/gallery/galleryActions';


const initialState = {
  photos: [],
  pending: false,
  currentPhoto: {
    index: 0,
  },
  error: null,
  showModal: false,
};

export const gallery = (state = initialState, action) => {
  switch (action.type) {
    default: {
      return state;
    }

    case FETCH_PHOTOS_PENDING: {
      return {
        ...state,
        pending: true,
        error: null,
      };
    }

    case FETCH_PHOTOS_SUCCESS: {
      return {
        ...state,
        pending: false,
        photos: action.payload,
      };
    }

    case FETCH_PHOTOS_FAILURE: {
      return {
        ...state,
        pending: false,
        error: action.payload,
      };
    }

    case SET_CURRENT_PHOTO: {
      return {
        ...state,
        currentPhoto: {
          index: action.payload,
        },
      };
    }

    case TOGGLE_MODAL: {
      return {
        ...state,
        showModal: action.payload,
      };
    }

    case CHANGE_GALLERY_PHOTO: {
      let {
        currentPhoto: {
          index
        },
        photos
      } = state;

      index = action.payload === 'prev' ? index === 0
        ? photos.length - 1 : index - 1  : index === photos.length - 1
        ? 0 : index + 1;

      return {
        ...state,
        currentPhoto: {
          ...state.currentPhoto,
          index
        }
      };
    }
  }
};

export const getPhotos = state => state.gallery.photos;
export const getPhotosPending = state => state.gallery.pending;
export const getPhotosError = state => state.gallery.error;
export const getCurrentPhoto = state => state.gallery.photos[state.gallery.currentPhoto.index];
export const getShowModal = state => state.gallery.showModal;