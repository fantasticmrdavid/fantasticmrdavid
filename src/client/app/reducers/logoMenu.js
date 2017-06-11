import { LOGO_MENU_ACTIVATED, LOGO_MENU_DEACTIVATED } from 'constants';
import { createReducer } from 'helpers/reducers';

const initialState = {
  active: false,
};

const reducers = {
  [LOGO_MENU_ACTIVATED]: (state) => {
    return {
      ...state,
      active: true,
    };
  },
  [LOGO_MENU_DEACTIVATED]: (state) => {
    return {
      ...state,
      active: false,
    };
  },
};

export default createReducer(initialState, reducers);
