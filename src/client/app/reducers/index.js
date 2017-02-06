import { combineReducers } from 'redux';

import currentLocation from './currentLocation';
import homeMedia from './homeMedia';
import loading from './loading';
import logoMenu from './logoMenu';
import popup from './popup';
import workMedia from './workMedia';

const app = combineReducers({
  currentLocation,
  homeMedia,
  loading,
  logoMenu,
  popup,
  workMedia,
});

export default app;
