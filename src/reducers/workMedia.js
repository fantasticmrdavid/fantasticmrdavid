import { WORK_MEDIA_LOCATION_UPDATED } from 'constants';
import { createReducer } from 'helpers/reducers';

const initialState = {
  location: undefined,
};

const reducers = {
  [WORK_MEDIA_LOCATION_UPDATED]: (state, action) => ({
    ...state,
    location: action.newLocation,
  }),
};

export default createReducer(initialState, reducers);
