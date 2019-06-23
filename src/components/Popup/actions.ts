import { Dispatch } from 'redux';
import {
  POPUP_SHOWED,
  POPUP_HIDDEN,
} from 'reducers/popup';
import {
  POPUP_LOADING_STARTED,
  POPUP_LOADING_STOPPED,
} from 'reducers/loading';

export const popupShowed = (popup: any) => (dispatch: Dispatch<any>) => {
  dispatch({ type: POPUP_LOADING_STARTED });
  dispatch({
    type: POPUP_SHOWED,
    popup,
  });
  setTimeout(() => dispatch({ type: POPUP_LOADING_STOPPED }));
};

export const popupHidden = () => ({
  type: POPUP_HIDDEN,
});
