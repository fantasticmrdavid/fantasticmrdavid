import React from 'react';
import { connect } from 'react-redux';
import ProjectMedia from 'components/ProjectMedia';

const ProjectMediaContainer = props => <ProjectMedia {...props} />;

const mapStateToProps = (state) => {
  return {
    loading: state.loading.media,
  };
};

export default connect(
  mapStateToProps,
)(ProjectMediaContainer);
