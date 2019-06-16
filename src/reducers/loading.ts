import { createReducer } from 'helpers/reducers';

export const MEDIA_LOADING_STARTED = 'MEDIA_LOADING_STARTED';
export const MEDIA_LOADING_STOPPED = 'MEDIA_LOADING_STOPPED';
export const IMAGES_LOADING_STARTED = 'IMAGES_LOADING_STARTED';
export const IMAGES_LOADING_STOPPED = 'IMAGES_LOADING_STOPPED';
export const POPUP_LOADING_STARTED = 'POPUP_LOADING_STARTED';
export const POPUP_LOADING_STOPPED = 'POPUP_LOADING_STOPPED';

export interface State {
  firstLoad: boolean,
  images: boolean,
  media: boolean,
  popup: boolean,
}

const initialState = {
  firstLoad: true,
  images: false,
  media: true,
  popup: false,
};

const reducers = {
  [MEDIA_LOADING_STARTED]: (state: State) => {
    return {
      ...state,
      media: true,
    };
  },
  [MEDIA_LOADING_STOPPED]: (state: State) => {
    return {
      ...state,
      media: false,
      firstLoad: false,
    };
  },
  [IMAGES_LOADING_STARTED]: (state: State) => {
    return {
      ...state,
      images: true,
    };
  },
  [IMAGES_LOADING_STOPPED]: (state: State) => {
    return {
      ...state,
      images: false,
    };
  },
  [POPUP_LOADING_STARTED]: (state: State) => {
    return {
      ...state,
      popup: true,
    };
  },
  [POPUP_LOADING_STOPPED]: (state: State) => {
    return {
      ...state,
      popup: false,
    };
  },
};

export default createReducer(initialState, reducers);
