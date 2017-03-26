import { LOCATION_UPDATED } from '../constants';
import { mediaLoadingStarted, mediaLoadingStopped } from './loading';

export function locationUpdated(newLocation) {
  return (dispatch) => {
    dispatch(mediaLoadingStarted());
    dispatch({
      type: LOCATION_UPDATED,
      newLocation,
    });
    setTimeout(() => dispatch(mediaLoadingStopped()));
  };
}
