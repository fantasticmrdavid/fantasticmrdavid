import {
  START_MEDIA_LOADING,
  STOP_MEDIA_LOADING,
  START_IMAGES_LOADING,
  STOP_IMAGES_LOADING,
  START_POPUP_LOADING,
  STOP_POPUP_LOADING,
} from '../actions';

const loading = (state = {}, action) => {
  switch (action.type) {
    case START_MEDIA_LOADING:
      return {
        ...state,
        media: true,
      }
    case STOP_MEDIA_LOADING:
      return {
        ...state,
        media: false,
        firstLoad: false,
      }
    case START_IMAGES_LOADING:
      return {
        ...state,
        images: true,
      }
    case STOP_IMAGES_LOADING:
      return {
        ...state,
        images: false,
      }
    case START_POPUP_LOADING:
      return {
        ...state,
        popup: true,
      }
    case STOP_POPUP_LOADING:
      return {
        ...state,
        popup: false,
      }
    default:
      return state
  }
}

export default loading;
