import {
  START_MEDIA_LOADING,
  STOP_MEDIA_LOADING,
  START_IMAGES_LOADING,
  STOP_IMAGES_LOADING,
  START_POPUP_LOADING,
  STOP_POPUP_LOADING,
} from '../constants';

export function startMediaLoading() {
  return { type: START_MEDIA_LOADING };
}

export function stopMediaLoading() {
  return { type: STOP_MEDIA_LOADING };
}

export function startImagesLoading() {
  return { type: START_IMAGES_LOADING };
}

export function stopImagesLoading() {
  return { type: STOP_IMAGES_LOADING };
}

export function startPopupLoading() {
  return { type: START_POPUP_LOADING };
}

export function stopPopupLoading() {
  return { type: STOP_POPUP_LOADING };
}
