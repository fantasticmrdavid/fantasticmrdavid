import { Dispatch } from 'redux';
import {
  POPUP_SHOWED,
  POPUP_HIDDEN,
} from 'reducers/popup';
import { popupLoadingStarted, popupLoadingStopped } from './loading';

export const popupShowed = (popup: any) => (dispatch: Dispatch<any>) => {
  dispatch(popupLoadingStarted());
  dispatch({
    type: POPUP_SHOWED,
    popup,
  });
  setTimeout(() => dispatch(popupLoadingStopped()));
};

export const popupHidden = () => ({
  type: POPUP_HIDDEN,
});
