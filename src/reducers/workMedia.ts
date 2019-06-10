import { createReducer } from 'helpers/reducers';

export const WORK_MEDIA_LOCATION_UPDATED = 'WORK_MEDIA_LOCATION_UPDATED';

export interface State {
  location: string,
}

const initialState = {
  location: undefined,
};

const reducers = {
  [WORK_MEDIA_LOCATION_UPDATED]: (state: State, action: { newLocation: string }) => ({
    ...state,
    location: action.newLocation,
  }),
};

export default createReducer(initialState, reducers);
