import {
  POPUP_SHOWED,
  POPUP_HIDDEN,
} from '../constants';

export function showPopup(popup) {
  return {
    type: POPUP_SHOWED,
    popup,
  };
}

export function hidePopup() {
  return { type: POPUP_HIDDEN };
}
