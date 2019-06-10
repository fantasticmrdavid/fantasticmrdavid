import {
  MEDIA_LOADING_STARTED,
  MEDIA_LOADING_STOPPED,
  IMAGES_LOADING_STARTED,
  IMAGES_LOADING_STOPPED,
  POPUP_LOADING_STARTED,
  POPUP_LOADING_STOPPED,
} from 'reducers/loading';

export function mediaLoadingStarted() {
  return { type: MEDIA_LOADING_STARTED };
}

export function mediaLoadingStopped() {
  return { type: MEDIA_LOADING_STOPPED };
}

export function imagesLoadingStarted() {
  return { type: IMAGES_LOADING_STARTED };
}

export function imagesLoadingStopped() {
  return { type: IMAGES_LOADING_STOPPED };
}

export function popupLoadingStarted() {
  return { type: POPUP_LOADING_STARTED };
}

export function popupLoadingStopped() {
  return { type: POPUP_LOADING_STOPPED };
}
