import { UPDATE_WORK_MEDIA_LOCATION } from '../actions';

const workMedia = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_WORK_MEDIA_LOCATION:
      return {
        ...state,
        location: action.newLocation,
      };
    default:
      return state;
  };
};

export default workMedia;
