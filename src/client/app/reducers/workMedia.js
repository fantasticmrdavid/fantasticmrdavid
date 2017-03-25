import { UPDATE_WORK_MEDIA_LOCATION } from '../constants';
import { createReducer } from '../helpers/reducers';

const initialState = {
  location: undefined,
};

const reducers = {
  [UPDATE_WORK_MEDIA_LOCATION]: (state, action) => {
    return {
      ...state,
      location: action.newLocation,
    };
  },
};

export default createReducer(initialState, reducers);
