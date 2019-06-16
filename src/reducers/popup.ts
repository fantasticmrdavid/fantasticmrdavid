import { createReducer } from 'helpers/reducers';

export const POPUP_SHOWED = 'POPUP_SHOWED';
export const POPUP_HIDDEN = 'POPUP_HIDDEN';

export interface State {
  popup: any,
  active: boolean,
  title: string,
  url: string,
}

const initialState = {
  active: false,
  popup: undefined,
  title: null,
  url: null,
};

const reducers = {
  [POPUP_SHOWED]: (state: State, action: { popup: any }) => {
    return {
      ...state,
      ...action.popup,
      active: true,
    };
  },
  [POPUP_HIDDEN]: (state: State) => {
    return {
      ...state,
      title: undefined,
      url: undefined,
      active: false,
    };
  },
};

export default createReducer(initialState, reducers);
