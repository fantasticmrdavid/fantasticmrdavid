import { connect } from 'react-redux';
import {
  updateWorkMediaLocation,
  startMediaLoading,
  stopMediaLoading,
  showPopup,
  startPopupLoading,
  stopPopupLoading,
} from '../actions';
import Project from '../components/View/WorkMedia/Project';

const mapStateToProps = (state, ownProps) => {
  return {
    ...ownProps,
    current: state.workMedia.location,
    isCurrent: state.workMedia.location === ownProps.target,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateCurrent: (target) => {
      dispatch(startMediaLoading());
      dispatch(updateWorkMediaLocation(target));
      setTimeout( () => dispatch(stopMediaLoading()) );
    },
    showPopup: (popup) => {
      dispatch(startPopupLoading());
      dispatch(showPopup(popup));
      setTimeout( () => dispatch(stopPopupLoading()) );
    },
  };
};

const ProjectContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Project);

export default ProjectContainer;
