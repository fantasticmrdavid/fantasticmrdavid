import { createReducer } from 'helpers/reducers';

export const LOCATION_UPDATED = 'LOCATION_UPDATED';

export interface State {
  current: string,
}

const initialState = {
  current: 'home',
};

const reducers = {
  [LOCATION_UPDATED]: (state: State, action: { newLocation: string }) => {
    return {
      ...state,
      current: action.newLocation,
    };
  },
};

export default createReducer(initialState, reducers);
