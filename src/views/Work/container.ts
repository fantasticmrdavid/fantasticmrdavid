import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { AppState } from 'reducers';
import {
  mediaLoadingStopped,
  imagesLoadingStarted,
  imagesLoadingStopped,
  workMediaLocationUpdated,
  logoMenuActivated,
} from './actions';
import { DispatchProps, StateProps } from './types';
import Ui from './ui';

const mapStateToProps = (state: AppState) => {
  return {
    current: state.workMedia.location,
    isLoading: state.loading.media || state.loading.images,
  };
};

const mapDispatchToProps = (dispatch: Dispatch<any>) => {
  return {
    activateLogoMenu: () => dispatch(logoMenuActivated()),
    setTarget: (target: string) => dispatch(workMediaLocationUpdated(target)),
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
