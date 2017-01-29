import React, { Component } from 'react';
import './styles.css';

export default class Desktop extends Component {
  handleClick () {
    const { title } = this.props;
    ga('send', 'event', 'Media Desktop Website click', title);
  }

  render () {
    const { title, thumbnail, url } = this.props;
    const bgStyle = { backgroundImage: `url(${thumbnail})`};

    return <div className="ProjectMedia_desktop">
            <div className="ProjectMedia_desktopOuterFrame u-stroke">
              <div className="ProjectMedia_desktopScreen u-stroke">
                <a href={ url } target="_blank"><img src={ thumbnail } alt={ title } onClick={ ::this.handleClick }/></a>
              </div>
            </div>
            <div className="ProjectMedia_desktopStand u-stroke" />
            <div className="ProjectMedia_desktopBase u-stroke" />
          </div>
  }
}
