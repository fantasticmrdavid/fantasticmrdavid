import {
  MEDIA_LOADING_STARTED,
  MEDIA_LOADING_STOPPED,
  IMAGES_LOADING_STARTED,
  IMAGES_LOADING_STOPPED,
  POPUP_LOADING_STARTED,
  POPUP_LOADING_STOPPED,
} from 'constants';
import { createReducer } from 'helpers/reducers';

const initialState = {
  firstLoad: true,
  images: false,
  media: true,
  popup: false,
};

const reducers = {
  [MEDIA_LOADING_STARTED]: state => {
    return {
      ...state,
      media: true,
    };
  },
  [MEDIA_LOADING_STOPPED]: state => {
    return {
      ...state,
      media: false,
      firstLoad: false,
    };
  },
  [IMAGES_LOADING_STARTED]: state => {
    return {
      ...state,
      images: true,
    };
  },
  [IMAGES_LOADING_STOPPED]: state => {
    return {
      ...state,
      images: false,
    };
  },
  [POPUP_LOADING_STARTED]: state => {
    return {
      ...state,
      popup: true,
    };
  },
  [POPUP_LOADING_STOPPED]: state => {
    return {
      ...state,
      popup: false,
    };
  },
};

export default createReducer(initialState, reducers);
