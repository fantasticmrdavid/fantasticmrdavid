import {
  WORK_MEDIA_LOCATION_UPDATED,
} from '../constants';

export function workMediaLocationUpdated(newLocation) {
  return {
    type: WORK_MEDIA_LOCATION_UPDATED,
    newLocation,
  };
}
