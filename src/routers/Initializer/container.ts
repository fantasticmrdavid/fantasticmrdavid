import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { AppState } from 'reducers';
import { HOME_IMAGES } from 'data/homeImages';
import { mediaLoadingStopped } from './actions';
import Ui from './ui';

type Image = {
  name: string,
  src: string,
};

type StateProps = {
  images: Image[],
};

type DispatchProps = {
  stopLoading: () => void,
};

const mapStateToProps = () => {
  return {
    images: HOME_IMAGES,
  };
};

const mapDispatchToProps = (dispatch: Dispatch<any>) => {
  return {
    stopLoading: () => {
      dispatch(mediaLoadingStopped());
    },
  };
};

export default connect<StateProps, DispatchProps, {}, AppState>(
  mapStateToProps,
  mapDispatchToProps,
)(Ui);
