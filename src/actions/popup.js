import {
  POPUP_SHOWED,
  POPUP_HIDDEN,
} from 'constants';
import { popupLoadingStarted, popupLoadingStopped } from './loading';

export function popupShowed(popup) {
  return dispatch => {
    dispatch(popupLoadingStarted());
    dispatch({
      type: POPUP_SHOWED,
      popup,
    });
    setTimeout(() => dispatch(popupLoadingStopped()));
  };
}

export function popupHidden() {
  return { type: POPUP_HIDDEN };
}
