import { Dispatch } from 'redux';
import {
  WORK_MEDIA_LOCATION_UPDATED,
} from 'reducers/workMedia';

import { mediaLoadingStarted, mediaLoadingStopped } from './loading';

export const workMediaLocationUpdated = (newLocation: string) => (dispatch: Dispatch<any>) => {
  dispatch(mediaLoadingStarted());
  dispatch({
    type: WORK_MEDIA_LOCATION_UPDATED,
    newLocation,
  });
  setTimeout(() => dispatch(mediaLoadingStopped()));
};
