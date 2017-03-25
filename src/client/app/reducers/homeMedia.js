import { UPDATE_HOME_MEDIA_IMAGE } from '../constants';
import { createReducer } from '../helpers/reducers';

const initialState = {
  image: {
    name: "legoFlinders",
    src: "/assets/images/legoFlinders.jpg",
  },
};

const reducers = {
  [UPDATE_HOME_MEDIA_IMAGE]: (state, action) => {
    return {
      ...state,
      image: action.image,
    };
  },
};

export default createReducer(initialState, reducers);
