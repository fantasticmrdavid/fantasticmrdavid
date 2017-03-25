import {
  UPDATE_WORK_MEDIA_LOCATION,
} from '../constants';

export function updateWorkMediaLocation(newLocation) {
  return {
    type: UPDATE_WORK_MEDIA_LOCATION,
    newLocation,
  };
}
