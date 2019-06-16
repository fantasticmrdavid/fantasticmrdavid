import { combineReducers } from 'redux';

import homeMedia, { State as HomeMediaState } from './homeMedia';
import loading, { State as LoadingState } from './loading';
import location, { State as LocationState } from './location';
import logoMenu, { State as LogoMenuState } from './logoMenu';
import popup, { State as PopupState } from './popup';
import workMedia, { State as WorkMediaState } from './workMedia';

export interface AppState {
  homeMedia: HomeMediaState,
  loading: LoadingState,
  location: LocationState,
  logoMenu: LogoMenuState,
  popup: PopupState,
  workMedia: WorkMediaState,
}

const reducers = combineReducers({
  homeMedia,
  loading,
  location,
  logoMenu,
  popup,
  workMedia,
});

export default reducers;
