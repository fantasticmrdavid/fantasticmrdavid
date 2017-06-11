import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { mediaLoadingStopped, imagesLoadingStarted, imagesLoadingStopped } from 'actions';
import Spinner from 'components/Spinner';
import ImagePreloader from 'components/ImagePreloader';
import projects from './projects';
import Project from './Project';
import styles from './styles.css';

class WorkMedia extends Component {
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

  updateCurrent(newCurrent) {
    this.setState({ current: newCurrent });
    ga('send', 'event', 'Work Navigate', newCurrent);
  }

  render() {
    const { loading, stopLoading } = this.props;

    return (
      <div className={`${styles.WorkMedia} ${loading && styles.loading}`}>
        <div className={styles.loadingContainer}>
          <ImagePreloader images={this.getImages()} completedAction={stopLoading} />
          { loading && <Spinner /> }
        </div>

        <div className={styles.projectContainer}>
          {
            projects.map((p) => { return <Project {...p} key={`Project_${p.target}`} />; })
          }
        </div>
      </div>
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
