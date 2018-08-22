import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './styles.css';

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
      <div className={styles.Desktop}>
        <div className={`${styles.outerFrame} ${styles.stroke}`}>
          <div className={`${styles.screen} ${styles.stroke}`}>
            <a href={url} target="_blank" rel="noopener noreferrer"><img src={thumbnail} alt={title} onClick={this.boundHandleClick} /></a>
          </div>
        </div>
        <div className={`${styles.stand} ${styles.stroke}`} />
        <div className={`${styles.base} ${styles.stroke}`} />
      </div>
    );
  }
}

Desktop.propTypes = {
  title: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};
