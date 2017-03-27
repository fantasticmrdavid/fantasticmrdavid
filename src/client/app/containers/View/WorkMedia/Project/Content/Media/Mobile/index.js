import React, { Component, PropTypes } from 'react';
import './styles.css';

export default class Mobile extends Component {
  constructor() {
    super();
    this.boundHandleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { title } = this.props;
    ga('send', 'event', 'Media Mobile Website click', title);
  }

  render() {
    const { title, thumbnail, url } = this.props;

    return (
      <div className="ProjectMedia_mobile">
        <div className="ProjectMedia_mobileOuterFrame u-stroke">
          <div className="ProjectMedia_mobileScreen u-stroke">
            <a href={url} target="_blank" rel="noopener noreferrer"><img src={thumbnail} alt={title} onClick={this.boundHandleClick} /></a>
          </div>
          <div className="ProjectMedia_mobileHomeButton u-stroke" />
          <div className="ProjectMedia_mobileUpButton u-stroke" />
          <div className="ProjectMedia_mobileDownButton u-stroke" />
        </div>
      </div>
    );
  }
}

Mobile.propTypes = {
  title: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};
