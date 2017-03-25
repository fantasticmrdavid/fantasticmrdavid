import {
  SHOW_POPUP,
  HIDE_POPUP,
} from '../constants';

export function showPopup(popup) {
  return {
    type: SHOW_POPUP,
    popup,
  };
}

export function hidePopup() {
  return { type: HIDE_POPUP };
}
