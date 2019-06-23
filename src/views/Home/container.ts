import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { AppState } from 'reducers';
import { homeMediaImageUpdated, mediaLoadingStopped } from './actions';
import Ui from './ui';

type StateProps = {
  image: {
    name: string,
    src: string,
  },
  loading: boolean,
}

type DispatchProps = {
  updateImage: () => void,
  stopLoading: () => void,
}

const HOME_IMAGES = [
  {
    name: 'legoFlinders',
    src: '/assets/images/legoFlinders.jpg',
  },
];

const mapStateToProps = (state: AppState) => {
  return {
    image: state.homeMedia.image,
    loading: state.loading.media,
  };
};

const mapDispatchToProps = (dispatch: Dispatch<any>) => {
  return {
    updateImage: () => {
      const image = HOME_IMAGES[Math.floor(Math.random() * HOME_IMAGES.length)];
      dispatch(homeMediaImageUpdated(image));
    },
    stopLoading: () => {
      dispatch(mediaLoadingStopped());
    },
  };
};

export default connect<StateProps, DispatchProps, {}, AppState>(
  mapStateToProps,
  mapDispatchToProps,
)(Ui);
