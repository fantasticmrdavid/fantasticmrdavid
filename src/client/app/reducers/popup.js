import { SHOW_POPUP, HIDE_POPUP } from '../actions';

const popup = (state = {}, action) => {
  switch (action.type) {
    case SHOW_POPUP:
      return {
        ...state,
        ...action.popup,
        active: true,
      }
    case HIDE_POPUP:
      return {
        ...state,
        title: undefined,
        url: undefined,
        active: false,
      }
    default:
      return state
  }
}

export default popup;
