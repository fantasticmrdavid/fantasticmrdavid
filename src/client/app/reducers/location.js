import { LOCATION_UPDATED } from 'constants';
import { createReducer } from 'helpers/reducers';

const initialState = {
  current: 'home',
};

const reducers = {
  [LOCATION_UPDATED]: (state, action) => {
    return {
      ...state,
      current: action.newLocation,
    };
  },
};

export default createReducer(initialState, reducers);
