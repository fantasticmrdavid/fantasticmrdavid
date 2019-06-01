import React from 'react';
import { connect } from 'react-redux';
import { workMediaLocationUpdated, popupShowed } from 'actions';
import Project from 'components/Project';

const ProjectContainer = props => <Project {...props} />;

const mapStateToProps = (state, ownProps) => {
  return {
    ...ownProps,
    parentLoading: state.loading.media || state.loading.images,
    current: state.workMedia.location,
    isCurrent: state.workMedia.location === ownProps.target,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateCurrent: target => {
      dispatch(workMediaLocationUpdated(target));
    },
    showPopup: popup => {
      dispatch(popupShowed(popup));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProjectContainer);
