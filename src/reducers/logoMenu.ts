import { createReducer } from 'helpers/reducers';

export const LOGO_MENU_ACTIVATED = 'LOGO_MENU_ACTIVATED';
export const LOGO_MENU_DEACTIVATED = 'LOGO_MENU_DEACTIVATED';

export interface State {
  isActive: boolean,
}

const initialState = {
  isActive: false,
};

const reducers = {
  [LOGO_MENU_ACTIVATED]: (state: State) => {
    return {
      ...state,
      isActive: true,
    };
  },
  [LOGO_MENU_DEACTIVATED]: (state: State) => {
    return {
      ...state,
      isActive: false,
    };
  },
};

export default createReducer(initialState, reducers);
