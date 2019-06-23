import { Dispatch } from 'redux';
import { LOCATION_UPDATED } from 'reducers/location';
import {
  MEDIA_LOADING_STARTED,
  MEDIA_LOADING_STOPPED,
} from 'reducers/loading';

export const locationUpdated = (newLocation: string) => (dispatch: Dispatch<any>) => {
  dispatch({ type: MEDIA_LOADING_STARTED });
  dispatch({
    type: LOCATION_UPDATED,
    newLocation,
  });
  dispatch({ type: MEDIA_LOADING_STOPPED });
};
