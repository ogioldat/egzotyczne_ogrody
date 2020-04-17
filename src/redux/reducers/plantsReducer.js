import { routes } from 'routes';
import {
  FETCH_PLANTS_PENDING, SET_PLANT_DETAILS,
  FETCH_PLANTS_SUCCESS, FETCH_PLANTS_FAILURE,
  SET_CURRENT_PLANT, CHANGE_PLANT, SET_PLANT_DETAILS_EMPTY,
} from '../actions/plants/plantActions';

const initialState = {
  plants: {
    bananas: {},
    bamboos: {},
  },
  pending: false,
  error: null,
  currentPlant: {
    category: 'bananas',
    key: 'banana',
    index: 0,
  },
  plantDetailsEmpty: false,
  isMenuActive: false,
  leadingRoute: routes.menu,
};

const plantsReducer = (state = initialState, action) => {
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

    default: {
      return state;
    }
  }
};

export default plantsReducer;
export const getPlants = state => state.plantsReducer.plants;
export const getPending = state => state.plantsReducer.pending;
export const getError = state => state.plantsReducer.error;
export const getCurrentPlant = state => state.plantsReducer.plants[state.plantsReducer.currentPlant.key];
export const getPlantDetailsEmpty = state => state.plantsReducer.plantDetailsEmpty;
export const getDetailsPlant = state => {
  const plantCategoryObj = state.plantsReducer.plants[state.plantsReducer.currentPlant.category];
  return plantCategoryObj[state.plantsReducer.currentPlant.key];
};
export const getPlantCategories = state => Object.keys(state.plantsReducer.plants);

