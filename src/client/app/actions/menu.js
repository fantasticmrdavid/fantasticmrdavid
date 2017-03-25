import {
  LOGO_MENU_ACTIVATED,
  LOGO_MENU_DEACTIVATED,
} from '../constants';

export function activateLogoMenu() {
  return {
    type: LOGO_MENU_ACTIVATED,
  };
}

export function deactivateLogoMenu() {
  return {
    type: LOGO_MENU_DEACTIVATED,
  };
}
