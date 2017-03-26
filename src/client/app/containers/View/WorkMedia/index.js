import React, { Component } from 'react';
import { connect } from 'react-redux';
import { mediaLoadingStopped, imagesLoadingStarted, imagesLoadingStopped } from '../../../actions';
import projects from './projects';
import Project from './Project';
import Spinner from '../../../components/Spinner';
import ImagePreloader from '../../../components/ImagePreloader';
import './styles.css';

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
      <div className={`WorkMedia u-${loading && 'loading'}`}>
        <div className="WorkMedia_loadingContainer">
          <ImagePreloader images={this.getImages()} completedAction={stopLoading} />
          { loading && <Spinner /> }
        </div>

        <div className="WorkMedia_projectContainer">
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WorkMedia);
