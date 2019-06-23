import { HOME_MEDIA_IMAGE_UPDATED } from 'reducers/homeMedia';
import { MEDIA_LOADING_STOPPED } from 'reducers/loading';

export const homeMediaImageUpdated = (image: any) => ({
  type: HOME_MEDIA_IMAGE_UPDATED,
  image,
});

export const mediaLoadingStopped = () => ({
  type: MEDIA_LOADING_STOPPED,
});
