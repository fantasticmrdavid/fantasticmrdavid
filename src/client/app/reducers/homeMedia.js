import { UPDATE_HOME_MEDIA_IMAGE } from '../actions';

const homeMedia = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_HOME_MEDIA_IMAGE:
      return {
        ...state,
        image: action.image,
      }
    default:
      return state
  };
}

export default homeMedia;
