import { UPDATE_LOCATION } from '../constants';
import { createReducer } from '../helpers/reducers';

const initialState = {
  current: "home",
};

const reducers = {
  [UPDATE_LOCATION]: (state, action) => {
    return {
      ...state,
      current: action.newLocation,
    };
  },
};

export default createReducer(initialState, reducers);
