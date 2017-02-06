export const UPDATE_LOCATION = 'UPDATE_LOCATION';
export const START_MEDIA_LOADING = 'START MEDIA LOADING';
export const STOP_MEDIA_LOADING = 'STOP MEDIA LOADING';
export const START_IMAGES_LOADING = 'START IMAGES LOADING';
export const STOP_IMAGES_LOADING = 'STOP IMAGES LOADING';
export const SHOW_POPUP = 'SHOW_POPUP';
export const HIDE_POPUP = 'HIDE_POPUP';
export const START_POPUP_LOADING = 'START POPUP LOADING';
export const STOP_POPUP_LOADING = 'STOP POPUP LOADING';
export const ACTIVATE_LOGO_MENU = 'ACTIVATE_LOGO_MENU';
export const DEACTIVATE_LOGO_MENU = 'DEACTIVATE_LOGO_MENU';
export const UPDATE_HOME_MEDIA_IMAGE = 'UPDATE_HOME_MEDIA_IMAGE';
export const UPDATE_WORK_MEDIA_LOCATION = 'UPDATE_WORK_MEDIA_LOCATION';

export function updateLocation(newLocation) {
  return {
    type: UPDATE_LOCATION,
    newLocation,
  };
}

export function startMediaLoading() {
  return { type: START_MEDIA_LOADING };
}

export function stopMediaLoading() {
  return { type: STOP_MEDIA_LOADING };
}

export function startImagesLoading() {
  return { type: START_IMAGES_LOADING };
}

export function stopImagesLoading() {
  return { type: STOP_IMAGES_LOADING };
}

export function startPopupLoading() {
  return { type: START_POPUP_LOADING };
}

export function stopPopupLoading() {
  return { type: STOP_POPUP_LOADING };
}

export function showPopup(popup) {
  return {
    type: SHOW_POPUP,
    popup,
  };
}

export function hidePopup() {
  return { type: HIDE_POPUP };
}

export function activateLogoMenu() {
  return {
    type: ACTIVATE_LOGO_MENU,
  };
}

export function deactivateLogoMenu() {
  return {
    type: DEACTIVATE_LOGO_MENU,
  };
}

export function updateHomeMediaImage(image) {
  return {
    type: UPDATE_HOME_MEDIA_IMAGE,
    image,
  }
}

export function updateWorkMediaLocation(newLocation) {
  return {
    type: UPDATE_WORK_MEDIA_LOCATION,
    newLocation,
  };
}
