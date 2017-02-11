import { UPDATE_LOCATION } from '../actions';

const currentLocation = (state = "home", action) => {
  switch (action.type) {
    case UPDATE_LOCATION:
      return action.newLocation;
    default:
      return state;
  };
};

export default currentLocation;
