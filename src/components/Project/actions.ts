import { Dispatch } from 'redux';
import {
  WORK_MEDIA_LOCATION_UPDATED,
} from 'reducers/workMedia';

export const workMediaLocationUpdated = (newLocation: string) => (dispatch: Dispatch<any>) => {
  dispatch({
    type: WORK_MEDIA_LOCATION_UPDATED,
    newLocation,
  });
};
