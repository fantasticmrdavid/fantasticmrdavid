import { UPDATE_LOCATION } from '../constants';

export function updateLocation(newLocation) {
  return {
    type: UPDATE_LOCATION,
    newLocation,
  };
}
