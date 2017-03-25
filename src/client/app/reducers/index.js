import { combineReducers } from 'redux';

import homeMedia from './homeMedia';
import loading from './loading';
import location from './location';
import logoMenu from './logoMenu';
import popup from './popup';
import workMedia from './workMedia';

const reducers = combineReducers({
  homeMedia,
  loading,
  location,
  logoMenu,
  popup,
  workMedia,
});

export default reducers;
