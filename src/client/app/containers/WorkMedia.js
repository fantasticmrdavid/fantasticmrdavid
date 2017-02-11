import { connect } from 'react-redux';
import { updateWorkMediaLocation, stopMediaLoading, startImagesLoading, stopImagesLoading } from '../actions';
import WorkMedia from '../components/View/WorkMedia';

const mapStateToProps = (state) => {
  return {
    loading: state.loading.media || state.loading.images,
    current: state.workMedia.location,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateLocation: (target) => {
      dispatch(updateWorkMediaLocation(target));
    },
    startImagesLoading: () => {
      dispatch(startImagesLoading());
    },
    stopLoading: () => {
      dispatch(stopImagesLoading());
      dispatch(stopMediaLoading());
    },
  };
};

const WorkMediaContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(WorkMedia);

export default WorkMediaContainer;
