import { combineReducers } from 'redux';

import popup, { State as PopupState } from './popup';
import workMedia, { State as WorkMediaState } from './workMedia';

export interface AppState {
  popup: PopupState,
  workMedia: WorkMediaState,
}

const reducers = combineReducers({
  popup,
  workMedia,
});

export default reducers;
