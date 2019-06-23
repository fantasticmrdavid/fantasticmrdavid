import {
  LOGO_MENU_ACTIVATED,
  LOGO_MENU_DEACTIVATED,
} from 'reducers/logoMenu';

export const logoMenuActivated = () => ({
  type: LOGO_MENU_ACTIVATED,
});

export const logoMenuDeactivated = () => ({
  type: LOGO_MENU_DEACTIVATED,
});
