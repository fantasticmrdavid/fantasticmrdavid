import {
  HOME_MEDIA_IMAGE_UPDATED,
} from 'reducers/homeMedia';

export function homeMediaImageUpdated(image) {
  return {
    type: HOME_MEDIA_IMAGE_UPDATED,
    image,
  };
}
