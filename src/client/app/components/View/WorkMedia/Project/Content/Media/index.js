import React, { Component } from 'react';
import './styles.css';
import Mobile from './Mobile';
import Desktop from './Desktop';
import Image from './Image';

export default class ProjectMedia extends Component {
  render () {
    const { title, type, platform = null, thumbnail, url } = this.props;
    const bgStyle = { backgroundImage: `url(${thumbnail})`};

    return <div className={`ProjectMedia u-${type} u-${platform}`}>
            { platform === 'mobile' && <Mobile { ...this.props } /> }
            { platform === 'desktop' && <Desktop { ...this.props } /> }
            { type === 'image' && <Image { ...this.props } /> }
          </div>
  }
};
