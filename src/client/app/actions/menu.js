import {
  ACTIVATE_LOGO_MENU,
  DEACTIVATE_LOGO_MENU,
} from '../constants';

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
