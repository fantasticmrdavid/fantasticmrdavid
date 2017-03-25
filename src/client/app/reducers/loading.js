import {
  START_MEDIA_LOADING,
  STOP_MEDIA_LOADING,
  START_IMAGES_LOADING,
  STOP_IMAGES_LOADING,
  START_POPUP_LOADING,
  STOP_POPUP_LOADING,
} from '../constants';
import { createReducer } from '../helpers/reducers';

const initialState = {
  firstLoad: true,
  images: false,
  media: true,
  popup: false,
};

const reducers = {
  [START_MEDIA_LOADING]: (state) => {
    return {
      ...state,
      media: true,
    };
  },
  [STOP_MEDIA_LOADING]: (state) => {
    return {
      ...state,
      media: false,
      firstLoad: false,
    };
  },
  [START_IMAGES_LOADING]: (state) => {
    return {
      ...state,
      images: true,
    };
  },
  [STOP_IMAGES_LOADING]: (state) => {
    return {
      ...state,
      images: false,
    };
  },
  [START_POPUP_LOADING]: (state) => {
    return {
      ...state,
      popup: true,
    };
  },
  [STOP_POPUP_LOADING]: (state) => {
    return {
      ...state,
      popup: false,
    };
  },
};

export default createReducer(initialState, reducers);
