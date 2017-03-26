import {
  POPUP_SHOWED,
  POPUP_HIDDEN,
} from '../constants';
import { popupLoadingStarted, popupLoadingStopped } from './loading';

export function showPopup(popup) {
  return (dispatch) => {
    dispatch(popupLoadingStarted());
    dispatch({
      type: POPUP_SHOWED,
      popup,
    });
    setTimeout(() => dispatch(popupLoadingStopped()));
  };
}

export function hidePopup() {
  return { type: POPUP_HIDDEN };
}
