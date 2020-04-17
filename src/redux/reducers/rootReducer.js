import { combineReducers } from 'redux';
import plantsReducer from './plantsReducer';
import { galleryReducer } from './galleryReducer';
import { menuReducer } from './menuReducer';

export default combineReducers({ plantsReducer, galleryReducer, menuReducer });