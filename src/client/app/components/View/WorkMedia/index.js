import React, { Component } from 'react';
import './styles.css';
import projects from './projects';
import ProjectContainer from '../../../containers/Project';
import Spinner from '../../Spinner';
import ImagePreloader from '../../ImagePreloader';

export default class WorkMedia extends Component {
  componentWillMount () {
    const { startImagesLoading } = this.props;
    startImagesLoading();
  }

  updateCurrent (newCurrent) {
    this.setState({ current: newCurrent });
    ga('send', 'event', 'Work Navigate', newCurrent);
  }

  getImages () {
    let images = [];

    projects.map((p) => {
      if (!!p.images) {
        let newImages = Object.keys(p.images).map(function(key) { return p.images[key]; });
        images = [...images, ...newImages];
      }
    });

    return images;
  }

  render () {
    const { current, loading, stopLoading } = this.props;

    return <div className={ `WorkMedia u-${loading && 'loading'}` }>
            <div className="WorkMedia_loadingContainer">
              <ImagePreloader images={ this.getImages() } completedAction={ stopLoading } />
              { loading && <Spinner /> }
            </div>

            <div className="WorkMedia_projectContainer">
              {
                projects.map((p, i) => { return <ProjectContainer { ...p } key={`Project_${i}`} /> })
              }
            </div>
          </div>;
  }
}
