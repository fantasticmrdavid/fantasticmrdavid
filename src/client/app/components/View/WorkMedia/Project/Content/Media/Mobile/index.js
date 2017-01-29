import React, { Component } from 'react';
import './styles.css';

export default class Mobile extends Component {
  handleClick () {
    const { title } = this.props;
    ga('send', 'event', 'Media Mobile Website click', title);
  }

  render () {
    const { title, thumbnail, url } = this.props;
    const bgStyle = { backgroundImage: `url(${thumbnail})`};

    return <div className="ProjectMedia_mobile">
            <div className="ProjectMedia_mobileOuterFrame u-stroke">
              <div className="ProjectMedia_mobileScreen u-stroke">
                <a href={ url } target="_blank"><img src={ thumbnail } alt={ title } onClick={ ::this.handleClick } /></a>
              </div>
              <div className="ProjectMedia_mobileHomeButton u-stroke" />
              <div className="ProjectMedia_mobileUpButton u-stroke" />
              <div className="ProjectMedia_mobileDownButton u-stroke" />
            </div>
          </div>
  }
}
