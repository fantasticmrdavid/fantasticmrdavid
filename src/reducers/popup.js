import { POPUP_SHOWED, POPUP_HIDDEN } from 'constants';
import { createReducer } from 'helpers/reducers';

const initialState = {
  popup: undefined,
};

const reducers = {
  [POPUP_SHOWED]: (state, action) => {
    return {
      ...state,
      ...action.popup,
      active: true,
    };
  },
  [POPUP_HIDDEN]: (state) => {
    return {
      ...state,
      title: undefined,
      url: undefined,
      active: false,
    };
  },
};

export default createReducer(initialState, reducers);
