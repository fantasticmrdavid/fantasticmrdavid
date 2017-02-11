import React, { Component } from 'react';
import './styles.css';

export default class Image extends Component {
  handleClick (e) {
    e.preventDefault();
    const { title, url, orientation, showPopup } = this.props;
    showPopup({ title: title, url: url, orientation: orientation });

    ga('send', 'event', 'Media Image Click', title);
  }
  render () {
    const { title, thumbnail, url, showPopup } = this.props;
    const bgStyle = { backgroundImage: `url(${thumbnail})`};

    return <div className="ProjectMedia_image">
            <div className="ProjectMedia_imageFrame u-stroke" onClick={ ::this.handleClick }>
              <img className="u-stroke" src={ thumbnail } alt={ title } />
            </div>
          </div>;
  }
}
