import {
  MEDIA_LOADING_STOPPED,
  IMAGES_LOADING_STARTED,
  IMAGES_LOADING_STOPPED, MEDIA_LOADING_STARTED,
} from 'reducers/loading';
import { Dispatch } from 'redux';
import { WORK_MEDIA_LOCATION_UPDATED } from 'reducers/workMedia';

export const mediaLoadingStopped = () => ({
  type: MEDIA_LOADING_STOPPED,
});

export const imagesLoadingStarted = () => ({
  type: IMAGES_LOADING_STARTED,
});

export const imagesLoadingStopped = () => ({
  type: IMAGES_LOADING_STOPPED,
});

export const workMediaLocationUpdated = (newLocation: string) => (dispatch: Dispatch<any>) => {
  dispatch({ type: MEDIA_LOADING_STARTED });
  dispatch({
    type: WORK_MEDIA_LOCATION_UPDATED,
    newLocation,
  });
  dispatch({ type: MEDIA_LOADING_STOPPED });
};
