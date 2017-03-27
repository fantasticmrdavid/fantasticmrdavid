import React, { Component, PropTypes } from 'react';
import './styles.css';

export default class Desktop extends Component {
  constructor() {
    super();
    this.boundHandleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { title } = this.props;
    ga('send', 'event', 'Media Desktop Website click', title);
  }

  render() {
    const { title, thumbnail, url } = this.props;

    return (
      <div className="ProjectMedia_desktop">
        <div className="ProjectMedia_desktopOuterFrame u-stroke">
          <div className="ProjectMedia_desktopScreen u-stroke">
            <a href={url} target="_blank" rel="noopener noreferrer"><img src={thumbnail} alt={title} onClick={this.boundHandleClick} /></a>
          </div>
        </div>
        <div className="ProjectMedia_desktopStand u-stroke" />
        <div className="ProjectMedia_desktopBase u-stroke" />
      </div>
    );
  }
}

Desktop.propTypes = {
  title: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};
