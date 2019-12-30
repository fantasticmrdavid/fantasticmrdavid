import { createReducer } from 'helpers/reducers';

export const POPUP_SHOWED = 'POPUP_SHOWED';
export const POPUP_HIDDEN = 'POPUP_HIDDEN';

export interface State {
  isActive: boolean,
  popup: any,
  title: string,
  url: string,
}

const initialState = {
  isActive: false,
  popup: undefined,
  title: null,
  url: null,
};

const reducers = {
  [POPUP_SHOWED]: (state: State, action: { popup: any }) => {
    return {
      ...state,
      ...action.popup,
      isActive: true,
    };
  },
  [POPUP_HIDDEN]: (state: State) => {
    return {
      ...state,
      title: undefined,
      url: undefined,
      isActive: false,
    };
  },
};

export default createReducer(initialState, reducers);
