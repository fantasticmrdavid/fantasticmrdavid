import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { mediaLoadingStopped, imagesLoadingStarted, imagesLoadingStopped } from 'actions';
import { AppState } from 'reducers';
import Ui from './ui';

type StateProps = {
  current: string,
  loading: boolean,
}

type DispatchProps = {
  startImagesLoading: () => void,
  stopLoading: () => void,
}

const mapStateToProps = (state: AppState) => {
  return {
    current: state.workMedia.location,
    loading: state.loading.media || state.loading.images,
  };
};

const mapDispatchToProps = (dispatch: Dispatch<any>) => {
  return {
    startImagesLoading: () => {
      dispatch(imagesLoadingStarted());
    },
    stopLoading: () => {
      dispatch(imagesLoadingStopped());
      dispatch(mediaLoadingStopped());
    },
  };
};

export default connect<StateProps, DispatchProps, {}, AppState>(
  mapStateToProps,
  mapDispatchToProps,
)(Ui);
