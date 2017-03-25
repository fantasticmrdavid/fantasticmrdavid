import {
  HOME_MEDIA_IMAGE_UPDATED,
} from '../constants';

export function homeMediaImageUpdated(image) {
  return {
    type: HOME_MEDIA_IMAGE_UPDATED,
    image,
  };
}
