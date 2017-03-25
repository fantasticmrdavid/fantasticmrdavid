import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateWorkMediaLocation, stopMediaLoading, startImagesLoading, stopImagesLoading } from '../../../actions';
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

  updateCurrent(newCurrent) {
    this.setState({ current: newCurrent });
    ga('send', 'event', 'Work Navigate', newCurrent);
  }

  getImages() {
    let images = [];

    projects.map((p) => {
      if (!!p.images) {
        let newImages = Object.keys(p.images).map(function(key) { return p.images[key]; });
        images = [...images, ...newImages];
      }
    });

    return images;
  }

  render() {
    const { current, loading, stopLoading } = this.props;

    return <div className={`WorkMedia u-${loading && 'loading'}`}>
            <div className="WorkMedia_loadingContainer">
              <ImagePreloader images={this.getImages()} completedAction={stopLoading} />
              { loading && <Spinner /> }
            </div>

            <div className="WorkMedia_projectContainer">
              {
                projects.map((p, i) => { return <Project {...p} key={`Project_${i}`} />; })
              }
            </div>
          </div>;
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WorkMedia);
