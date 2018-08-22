import {
  LOGO_MENU_ACTIVATED,
  LOGO_MENU_DEACTIVATED,
} from 'constants';

export function logoMenuActivated() {
  return {
    type: LOGO_MENU_ACTIVATED,
  };
}

export function logoMenuDeactivated() {
  return {
    type: LOGO_MENU_DEACTIVATED,
  };
}
