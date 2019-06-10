import {
  MEDIA_LOADING_STARTED,
  MEDIA_LOADING_STOPPED,
  IMAGES_LOADING_STARTED,
  IMAGES_LOADING_STOPPED,
  POPUP_LOADING_STARTED,
  POPUP_LOADING_STOPPED,
} from 'reducers/loading';

export const mediaLoadingStarted = () => ({
  type: MEDIA_LOADING_STARTED,
});

export const mediaLoadingStopped = () => ({
  type: MEDIA_LOADING_STOPPED,
});

export const imagesLoadingStarted = () => ({
  type: IMAGES_LOADING_STARTED,
});

export const imagesLoadingStopped = () => ({
  type: IMAGES_LOADING_STOPPED,
});

export const popupLoadingStarted = () => ({
  type: POPUP_LOADING_STARTED,
});

export const popupLoadingStopped = () => ({
  type: POPUP_LOADING_STOPPED,
});
