import React, { Component } from 'react';
import './styles.css';
import Project from './Project';
import Spinner from '../../Spinner';
import ImagePreloader from '../../ImagePreloader';

export default class WorkMedia extends Component {
  constructor (props) {
    super(props);

    this.state = {
      current: undefined,
    };
  }

  updateCurrent (newCurrent) {
    this.setState({ current: newCurrent });
  }

  getImages () {
    const { projects } = this.props;
    let images = [];

    projects.map((p) => {
      let newImages = Object.values(p.images);
      images = [...images, ...newImages];
    });

    return images;
  }

  render () {
    let { current } = this.state;
    const { projects, loading, stopMediaLoading } = this.props;

    return <div className={ `WorkMedia u-${loading && 'loading'}` }>
            <div className="WorkMedia_loadingContainer">
              <ImagePreloader images={ this.getImages() } completedAction={ stopMediaLoading } />
              { loading && <Spinner /> }
            </div>

            <div className="WorkMedia_projectContainer">
              { projects.map((p, i) => {
                return <Project
                          { ...p }
                          key={`Project_${i}`}
                          updateCurrent={ ::this.updateCurrent }
                          current={ current }/> }
                        )
              }
            </div>
          </div>;
  }
}
