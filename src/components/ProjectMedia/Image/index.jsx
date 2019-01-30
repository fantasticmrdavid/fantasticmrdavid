import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './styles.css';

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
    const { noSiblings, title, thumbnail } = this.props;

    return (
      <div className={noSiblings ? styles.imageSingle : styles.image}>
        <div className={styles.frame} onClick={this.boundHandleClick}>
          <img className={styles.stroke} src={thumbnail} alt={title} />
        </div>
      </div>
    );
  }
}

Image.propTypes = {
  noSiblings: PropTypes.bool,
  orientation: PropTypes.string.isRequired,
  showPopup: PropTypes.func.isRequired,
  thumbnail: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};
