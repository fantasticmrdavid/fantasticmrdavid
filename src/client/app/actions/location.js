import { LOCATION_UPDATED } from '../constants';

export function locationUpdated(newLocation) {
  return {
    type: LOCATION_UPDATED,
    newLocation,
  };
}
