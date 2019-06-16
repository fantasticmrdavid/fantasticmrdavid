import { Dispatch } from 'redux';
import { LOCATION_UPDATED } from 'reducers/location';
import { mediaLoadingStarted, mediaLoadingStopped } from './loading';

export const locationUpdated = (newLocation: string) => (dispatch: Dispatch<any>) => {
  dispatch(mediaLoadingStarted());
  dispatch({
    type: LOCATION_UPDATED,
    newLocation,
  });
  setTimeout(() => dispatch(mediaLoadingStopped()));
};
