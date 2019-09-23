import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { AppState } from 'reducers';
import { HOME_IMAGES } from 'data/homeImages';
import { homeMediaImageUpdated } from './actions';
import Ui from './ui';

type StateProps = {
  image: {
    name: string,
    src: string,
  },
  loading: boolean,
};

type DispatchProps = {
  updateImage: () => void,
};

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
  };
};

export default connect<StateProps, DispatchProps, {}, AppState>(
  mapStateToProps,
  mapDispatchToProps,
)(Ui);
