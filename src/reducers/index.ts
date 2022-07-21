import { combineReducers } from 'redux';

import loading, { State as LoadingState } from './loading';
import popup, { State as PopupState } from './popup';
import workMedia, { State as WorkMediaState } from './workMedia';

export interface AppState {
  loading: LoadingState,
  popup: PopupState,
  workMedia: WorkMediaState,
}

const reducers = combineReducers({
  loading,
  popup,
  workMedia,
});

export default reducers;
