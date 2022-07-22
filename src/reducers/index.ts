import { combineReducers } from 'redux';

import workMedia, { State as WorkMediaState } from './workMedia';

export interface AppState {
  workMedia: WorkMediaState,
}

const reducers = combineReducers({
  workMedia,
});

export default reducers;
