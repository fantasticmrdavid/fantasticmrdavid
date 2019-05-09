import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { mediaLoadingStopped, imagesLoadingStarted, imagesLoadingStopped } from 'actions';
import Spinner from 'components/Spinner';
import ImagePreloader from 'components/ImagePreloader';
import ProjectContainer from 'containers/ProjectContainer';
import projects from './projects';
import * as styles from './styles';

class WorkMedia extends PureComponent {
  componentWillMount() {
    const { startImagesLoading } = this.props;
    startImagesLoading();
  }

  getImages() {
    let images = [];

    projects.map((p) => {
      if (!!p.images) {
        const newImages = Object.keys(p.images).map((key) => { return p.images[key]; });
        images = [...images, ...newImages];
      }

      return p;
    });

    return images;
  }

  render() {
    const { loading, stopLoading } = this.props;
    const {
      Container,
      LoadingContainer,
      ProjectListContainer,
    } = styles;

    return (
      <Container>
        <LoadingContainer loading={loading}>
          <ImagePreloader images={this.getImages()} completedAction={stopLoading} />
          { loading && <Spinner /> }
        </LoadingContainer>

        <ProjectListContainer loading={loading}>
          {
            projects.map((p) => { return <ProjectContainer {...p} key={`Project_${p.target}`} />; })
          }
        </ProjectListContainer>
      </Container>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    loading: state.loading.media || state.loading.images,
    current: state.workMedia.location,
  };
};

const mapDispatchToProps = (dispatch) => {
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

WorkMedia.propTypes = {
  startImagesLoading: PropTypes.func.isRequired,
  stopLoading: PropTypes.func.isRequired,
  loading: PropTypes.bool,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(WorkMedia);
