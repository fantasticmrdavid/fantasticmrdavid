import {
  HOME_MEDIA_IMAGE_UPDATED,
} from 'reducers/homeMedia';

export const homeMediaImageUpdated = (image: any) => ({
  type: HOME_MEDIA_IMAGE_UPDATED,
  image,
});
