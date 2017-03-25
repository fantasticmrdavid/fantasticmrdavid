import {
  UPDATE_HOME_MEDIA_IMAGE,
} from '../constants';

export function updateHomeMediaImage(image) {
  return {
    type: UPDATE_HOME_MEDIA_IMAGE,
    image,
  };
}
