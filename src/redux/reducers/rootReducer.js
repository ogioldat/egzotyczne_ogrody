import { combineReducers } from 'redux';
import { plants } from './plantsReducer';
import { gallery } from './galleryReducer';
import { menu } from './menuReducer';
import { media } from './mediaReducer';

export default combineReducers({ plants, gallery, menu, media });