import { ACTIVATE_LOGO_MENU, DEACTIVATE_LOGO_MENU } from '../constants';
import { createReducer } from '../helpers/reducers';

const initialState = {
  active: false,
};

const reducers = {
  [ACTIVATE_LOGO_MENU]: (state) => {
    return {
      ...state,
      active: true,
    };
  },
  [DEACTIVATE_LOGO_MENU]: (state) => {
    return {
      ...state,
      active: false,
    };
  },
};

export default createReducer(initialState, reducers);
