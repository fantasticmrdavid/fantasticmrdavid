import { createReducer } from 'helpers/reducers';

export const HOME_MEDIA_IMAGE_UPDATED = 'HOME_MEDIA_IMAGE_UPDATED';

type Image = {
  name: string,
  src: string,
};

export interface State {
  image: Image,
}

const initialState = {
  image: {
    name: 'legoFlinders',
    src: '/assets/images/legoFlinders.jpg',
  },
};

const reducers = {
  [HOME_MEDIA_IMAGE_UPDATED]: (state: State, action: { image: Image }) => {
    return {
      ...state,
      image: action.image,
    };
  },
};

export default createReducer(initialState, reducers);
