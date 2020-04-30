import {
  FETCH_PLANTS_PENDING, SET_PLANT_DETAILS,
  FETCH_PLANTS_SUCCESS, FETCH_PLANTS_FAILURE,
  SET_CURRENT_PLANT, CHANGE_PLANT,
  SET_PLANT_DETAILS_EMPTY, SET_CURRENT_PLANT_PHOTO,
  TOGGLE_MODAL, CHANGE_PLANT_PHOTO
} from '../actions/plants/plantActions';

const initialState = {
  plants: {
    bananas: {},
    bamboos: {},
    grasses: {},
    waterPlants: {},
    others: {}
  },
  pending: false,
  error: null,
  currentPlant: {
    category: 'bananas',
    key: 'banana',
    photoIndex: 0,
    index: 0,
  },
  plantDetailsEmpty: false,
  showModal: false,
};

export const plants = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PLANTS_PENDING: {
      return {
        ...state,
        error: null,
        pending: true,
      };
    }

    case FETCH_PLANTS_SUCCESS: {
      const { plants, category } = action.payload;

      return {
        ...state,
        pending: false,
        plants: {
          ...state.plants,
          [category]: plants,
        },
      };
    }

    case FETCH_PLANTS_FAILURE: {
      return {
        ...state,
        pending: false,
        error: action.payload,
      };
    }

    case SET_CURRENT_PLANT: {
      const { plants } = state;
      const { category, key, index } = action.payload;

      return {
        ...state,
        currentPlant: {
          ...state.currentPlant,
          category,
          key: key || Object.keys(plants[category])[0],
          index,
        },
      };
    }

    case SET_PLANT_DETAILS: {
      return {
        ...state,
        plantDetailsEmpty: action.payload,
      };
    }

    case CHANGE_PLANT: {
      const {
        plants,
        currentPlant: {
          category,
          index,
        },
      } = state;

      const allPlants = Object.keys(plants[category]).map(key => plants[category][key]);
      const nextIndex = index === allPlants.length - 1 ? 0 : index + 1;
      const nextKey = allPlants[nextIndex].name;

      return {
        ...state,
        currentPlant: {
          ...state.currentPlant,
          index: nextIndex,
          key: nextKey,
        },
      };
    }

    case SET_PLANT_DETAILS_EMPTY: {
      return {
        ...state,
        plantDetailsEmpty: action.payload,
      };
    }

    case SET_CURRENT_PLANT_PHOTO: {
      return {
        ...state,
        currentPlant: {
          ...state.currentPlant,
          photoIndex: action.payload
        },
      };
    }

    case TOGGLE_MODAL: {
      return {
        ...state,
        showModal: action.payload,
      };
    }

    case CHANGE_PLANT_PHOTO: {
      let {
        plants,
        currentPlant: {
          photoIndex,
          category,
          key
        }
      } = state;

      const currentPlants = plants[category];
      const currentPlant = currentPlants[key];
      const images = currentPlant.images;

      photoIndex = action.payload === 'prev' ? photoIndex === 0
        ? images.length - 1 : photoIndex - 1  : photoIndex === images.length - 1
        ? 0 : photoIndex + 1;

      return {
        ...state,
        currentPlant: {
          ...state.currentPlant,
          photoIndex
        }
      };
    }

    default: {
      return state;
    }
  }
};

export const getPlants = state => state.plants.plants;
export const getPending = state => state.plants.pending;
export const getError = state => state.plants.error;
export const getCurrentPlant = state => state.plants.plants[state.plants.currentPlant.key];
export const getPlantDetailsEmpty = state => state.plants.plantDetailsEmpty;
export const getDetailsPlant = state => {
  const plantCategoryObj = state.plants.plants[state.plants.currentPlant.category];
  return plantCategoryObj[state.plants.currentPlant.key];
};
export const getPlantCategories = state => Object.keys(state.plants.plants);
export const getCurrentCategory = state => state.plants.currentPlant.category
export const getCurrentPlantPhoto = state => {
  const currentPlants = state.plants.plants[state.plants.currentPlant.category];
  const currentPlant = currentPlants[state.plants.currentPlant.key];
  return currentPlant && currentPlant.images[state.plants.currentPlant.photoIndex]
};
export const getShowModal = state => state.plants.showModal;

