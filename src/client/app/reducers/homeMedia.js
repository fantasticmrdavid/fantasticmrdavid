import { HOME_MEDIA_IMAGE_UPDATED } from '../constants';
import { createReducer } from '../helpers/reducers';

const initialState = {
  image: {
    name: 'legoFlinders',
    src: '/assets/images/legoFlinders.jpg',
  },
};

const reducers = {
  [HOME_MEDIA_IMAGE_UPDATED]: (state, action) => {
    return {
      ...state,
      image: action.image,
    };
  },
};

export default createReducer(initialState, reducers);
