import React, { Component } from 'react';
import './styles.css';

export default class Image extends Component {
  constructor() {
    super();
    this.boundHandleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    const { title, url, orientation, showPopup } = this.props;
    showPopup({ title, url, orientation });

    ga('send', 'event', 'Media Image Click', title);
  }

  render() {
    const { title, thumbnail } = this.props;

    return (
      <div className="ProjectMedia_image">
        <div className="ProjectMedia_imageFrame u-stroke" onClick={this.boundHandleClick}>
          <img className="u-stroke" src={thumbnail} alt={title} />
        </div>
      </div>
    );
  }
}
