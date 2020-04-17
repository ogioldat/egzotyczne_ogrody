export const FETCH_PLANTS_PENDING = 'FETCH_PLANTS_PENDING';
export const FETCH_PLANTS_SUCCESS = 'FETCH_PLANTS_SUCCESS';
export const FETCH_PLANTS_FAILURE = 'FETCH_PLANTS_FAILURE';
export const SET_CURRENT_PLANT = 'SET_CURRENT_PLANT';
export const CHANGE_PLANT = 'CHANGE_PLANT';
export const SET_PLANT_DETAILS = 'SET_PLANT_DETAILS';
export const SET_PLANT_DETAILS_EMPTY = 'SET_PLANT_DETAILS_EMPTY';
export const SET_CURRENT_PLANT_PHOTO = 'SET_CURRENT_PLANT_PHOTO';
export const TOGGLE_MODAL = 'TOGGLE_MODAL';
export const CHANGE_PLANT_PHOTO = 'CHANGE_PLANT_PHOTO';

export const fetchPlantsPending = () => ({
  type: FETCH_PLANTS_PENDING,
});

export const fetchPlantsSuccess = plants => ({
  type: FETCH_PLANTS_SUCCESS,
  payload: plants,
});

export const fetchPlantsFailure = error => ({
  type: FETCH_PLANTS_FAILURE,
  payload: error,
});

export const setCurrentPlant = currentPlant => ({
  type: SET_CURRENT_PLANT,
  payload: currentPlant
});

export const changePlant = direction => ({
  type: CHANGE_PLANT,
  payload: direction
});

export const setPlantDetails = bool => ({
  type: SET_PLANT_DETAILS,
  payload: bool
});

export const setCurrentIndex = bool => ({
  type: SET_PLANT_DETAILS,
  payload: bool
});

export const setPlantDetailsEmpty = bool => ({
  type: SET_PLANT_DETAILS_EMPTY,
  payload: bool
});

export const setCurrentPlantPhoto = currentPlantPhotoIndex => ({
  type: SET_CURRENT_PLANT_PHOTO,
  payload: currentPlantPhotoIndex
});

export const toggleModal = bool => ({
  type: TOGGLE_MODAL,
  payload: bool
});

export const changePlantPhoto = direction => ({
  type: CHANGE_PLANT_PHOTO,
  payload: direction
});