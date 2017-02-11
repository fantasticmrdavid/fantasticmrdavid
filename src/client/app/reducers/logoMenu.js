import { ACTIVATE_LOGO_MENU, DEACTIVATE_LOGO_MENU } from '../actions';

const logoMenu = (state = {}, action) => {
  switch (action.type) {
    case ACTIVATE_LOGO_MENU:
      return {
        ...state,
        active: true,
      };
    case DEACTIVATE_LOGO_MENU:
      return {
        ...state,
        active: false,
      };
    default:
      return state;
  }
};

export default logoMenu;
