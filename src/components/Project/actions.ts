import { Dispatch } from 'redux';
import {
  WORK_MEDIA_LOCATION_UPDATED,
} from 'reducers/workMedia';
import {
  MEDIA_LOADING_STARTED,
  MEDIA_LOADING_STOPPED,
} from 'reducers/loading';

export const workMediaLocationUpdated = (newLocation: string) => (dispatch: Dispatch<any>) => {
  dispatch({ type: MEDIA_LOADING_STARTED });
  dispatch({
    type: WORK_MEDIA_LOCATION_UPDATED,
    newLocation,
  });
  dispatch({ type: MEDIA_LOADING_STOPPED });
};
