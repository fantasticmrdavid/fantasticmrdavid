import { combineReducers } from 'redux';

import loading, { State as LoadingState } from './loading';
import location, { State as LocationState } from './location';
import popup, { State as PopupState } from './popup';
import workMedia, { State as WorkMediaState } from './workMedia';

export interface AppState {
  loading: LoadingState,
  location: LocationState,
  popup: PopupState,
  workMedia: WorkMediaState,
}

const reducers = combineReducers({
  loading,
  location,
  popup,
  workMedia,
});

export default reducers;
