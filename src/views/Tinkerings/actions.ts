import {
  MEDIA_LOADING_STOPPED,
  IMAGES_LOADING_STARTED,
  IMAGES_LOADING_STOPPED,
} from 'reducers/loading';

export const mediaLoadingStopped = () => ({
  type: MEDIA_LOADING_STOPPED,
});

export const imagesLoadingStarted = () => ({
  type: IMAGES_LOADING_STARTED,
});

export const imagesLoadingStopped = () => ({
  type: IMAGES_LOADING_STOPPED,
});
