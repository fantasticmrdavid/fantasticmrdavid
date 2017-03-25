import { SHOW_POPUP, HIDE_POPUP } from '../constants';
import { createReducer } from '../helpers/reducers';

const initialState = {
  popup: undefined,
};

const reducers = {
  [SHOW_POPUP]: (state, action) => {
    return {
      ...state,
      ...action.popup,
      active: true,
    };
  },
  [HIDE_POPUP]: (state) => {
    return {
      ...state,
      title: undefined,
      url: undefined,
      active: false,
    };
  },
};

export default createReducer(initialState, reducers);
