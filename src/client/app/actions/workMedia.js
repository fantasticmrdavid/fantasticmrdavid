import {
  WORK_MEDIA_LOCATION_UPDATED,
} from '../constants';
import { mediaLoadingStarted, mediaLoadingStopped } from './loading';

export function workMediaLocationUpdated(newLocation) {
  return (dispatch) => {
    dispatch(mediaLoadingStarted());
    dispatch({
      type: WORK_MEDIA_LOCATION_UPDATED,
      newLocation,
    });
    setTimeout(() => dispatch(mediaLoadingStopped()));
  };
}
